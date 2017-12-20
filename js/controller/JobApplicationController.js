angular.module("LifeCareApp").controller("JobApplicationController", function ($scope, $timeout, JobApplicationFactory) {

    $scope.jobApplication = {};

    $scope.message = {
        showSuccessMessage : false,
        showErrorMessage : false
    };

    $scope.submitApplication = function () {
        var formdata = new FormData();
        formdata.append("file", $scope.file);
        JobApplicationFactory.uploadFile(formdata).then(function (response) {
            console.log("Resume uploaded successfully to " + response.data);
            $scope.jobApplication.cvFilePath = response.data;
            $scope.jobApplication.id = generateCandidateId();
            JobApplicationFactory.saveCandidateDetails($scope.jobApplication).then(function () {
                console.log("Candidate details saved successfully successfully");
            }, function () {
                console.log("Error while saving candidate details.");
                $scope.message.showErrorMessage = true;
                $timeout(function() {
                    $scope.message.showErrorMessage = false;
                }, 10000);
            });
            $scope.jobApplication = {};
        }, function () {
            $scope.message.showErrorMessage = true;
            $timeout(function() {
                $scope.message.showErrorMessage = false;
            }, 10000);
            console.log("Error while uploading resume.");
        });
        $scope.file = {};
    }

    function generateCandidateId(){
        return Math.floor(10000 + Math.random() * 99999).toString();
    }
});