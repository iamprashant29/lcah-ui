angular.module("LifeCareApp").controller("ContactController", function ($scope, ServiceRequestFactory) {

    $scope.services = ["Blood test", "Physiotherapy Service", "Nursing Attendent Care", "Child Care Service",
    "Old Age Care Service", "ICU Care"];

    $scope.cities = ["Chandigarh", "Mohali"];

    $scope.request = {};

    $scope.createRequest = function () {
        $scope.request.requestId = generateRequestId();
        //$scope.request.date = new Date();
        console.log($scope.request);
        ServiceRequestFactory.createServiceRequest($scope.request).then(function(response){
            console.log("Service request created successfully. ");
            $scope.succesMessage = "Congratulations, Service request created successfully.";
            ServiceRequestFactory.sendEmail(response.data).then(function () {
                console.log("Emails sent successfully. ");
            }, function () {
                console.log("Error occured while sending emails");
            });
        }, function () {
            console.log("Error occured while creating service request ");
            $scope.errorMessage = "Something went wrong!!! Please try again.";
        });
        $scope.request = {};
    }

    function generateRequestId(){
       return "LCAH"+Math.floor(100000 + Math.random() * 999999)
    }

});