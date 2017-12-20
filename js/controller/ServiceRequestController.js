angular.module("LifeCareApp").controller("ContactController", function ($scope, $timeout, ServiceRequestFactory) {

    $scope.services = ["Physiotherapy Service", "Nursing Attendent Care", "Child Care Service",
    "Old Age Care Service", "ICU Care"];

    $scope.cities = ["Chandigarh", "Mohali"];

    $scope.request = {};

    $scope.message = {
        showSuccessMessage : false,
        showErrorMessage : false
    };

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

    function generateRequestId(){
       return "LCAH"+Math.floor(100000 + Math.random() * 999999)
    }

});