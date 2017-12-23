angular.module("LifeCareApp").controller("ContactController", function ($scope, $timeout, ServiceRequestFactory) {

    $scope.services = ["Physiotherapy Service", "Nursing Attendent Care", "Child Care Service",
    "Old Age Care Service", "ICU Care"];

    $scope.cities = ["Chandigarh", "Mohali"];

    $scope.request = {};

    $scope.message = {
        showSuccessMessage : false,
        showErrorMessage : false
    };

    $scope.isAgeValid = true;
    $scope.isLeadingZero = false;

    $scope.createRequest = function () {
        $scope.request.requestId = generateRequestId();
        console.log($scope.request);
        ServiceRequestFactory.createServiceRequest($scope.request).then(function(response){
            console.log("Service request created successfully. ");
            $scope.message.showSuccessMessage = true;
            $timeout(function() {
                $scope.message.showSuccessMessage = false;
            }, 10000);
            ServiceRequestFactory.sendEmail(response.data).then(function () {
                console.log("Emails sent successfully. ");
            }, function () {
                console.log("Error occured while sending emails");
            });
        }, function () {
            console.log("Error occured while creating service request ");
            $scope.message.showErrorMessage = true;
            $timeout(function() {
                $scope.message.showErrorMessage = false;
            }, 10000);
        });
        $scope.request = {};
    }

    $scope.validateAge = function(){
        if($scope.request.patientAge.toString().charAt(0) === '0'){
            $scope.isLeadingZero = true;
        }else{
            $scope.isLeadingZero = false;
        }

        if($scope.request.patientAge >= 1 && $scope.request.patientAge <= 120){
            $scope.isAgeValid = true;
        }else{
            $scope.isAgeValid = false;
        }
    };

    function generateRequestId(){
       return "LCAH"+Math.floor(100000 + Math.random() * 999999)
    }

});