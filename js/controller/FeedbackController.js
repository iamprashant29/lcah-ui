angular.module("LifeCareApp").controller("FeedbackController", function ($scope, $timeout, FeedbackFactory) {

    $scope.feedback = {};

    $scope.message = {
        showSuccessMessage : false,
        showErrorMessage : false
    };

    $scope.sendFeedback = function () {
        $scope.feedback.id = generateFeedbackId();
        //$scope.request.date = new Date();
        console.log($scope.feedback);
        FeedbackFactory.sendFeedback($scope.feedback).then(function(){
            console.log("Feedback sent successfully. ");
            $scope.message.showSuccessMessage = true;
            $timeout(function() {
                $scope.message.showSuccessMessage = false;
            }, 10000);
        }, function () {
            console.log("Error occured while sending feedback");
            $scope.message.showErrorMessage = true;
            $timeout(function() {
                $scope.message.showErrorMessage = false;
            }, 10000);
        });
        $scope.feedback = {};
    }

    function generateFeedbackId(){
        return Math.floor(100000 + Math.random() * 999999).toString();
    }

});