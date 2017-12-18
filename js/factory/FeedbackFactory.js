angular.module("LifeCareApp").factory("FeedbackFactory", function (baseUrl,$http) {
    var feedbackFactory = {}
    feedbackFactory.sendFeedback = function (feedback) {
        return $http.post(baseUrl + "feedbacks", feedback);
    };
    return feedbackFactory;
});