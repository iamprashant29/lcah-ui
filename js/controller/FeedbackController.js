angular.module("LifeCareApp").controller("FeedbackController", function ($scope, FeedbackFactory) {

    $scope.feedback = {};

    $scope.sendFeedback = function () {
        $scope.feedback.id = generateFeedbackId();
        //$scope.request.date = new Date();
        console.log($scope.feedback);
        FeedbackFactory.sendFeedback($scope.feedback).then(function(){
            console.log("Feedback sent successfully. ");
            $scope.succesMessage = "Thanks for your feedback.";
        }, function () {
            console.log("Error occured while sending feedback");
            $scope.errorMessage = "Something went wrong!!! Please try again.";
        });
        $scope.feedback = {};
    }

    function generateFeedbackId(){
        return Math.floor(100000 + Math.random() * 999999).toString();
    }

});