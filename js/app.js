var app = angular.module("LifeCareApp", ["ngRoute"]);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider.
        when('/', {
            templateUrl: 'home.html'
        }).
        when('/contact-us', {
            templateUrl: 'contact-us.html',
            controller: 'ContactController'
        }).
        when('/work-with-us', {
            templateUrl: 'job-application.html',
            controller: 'JobApplicationController'
        }).
        when('/careers', {
            templateUrl: 'careers.html',
            controller: 'CareerController'
        }).
        when('/about-us', {
            templateUrl: 'about-us.html'
        }).
        when('/feedback', {
            templateUrl: 'feedback.html',
            controller: 'FeedbackController'
        }).
        when('/services/physiotherapy-service', {
            templateUrl: 'physiotherapy-service-at-home.html'
        }).
        when('/services/nursing-service', {
            templateUrl: 'nursing-service-at-home.html'
        }).
        when('/services/icu-care', {
            templateUrl: 'icu-care-at-home.html'
        }).
        when('/services/child-care', {
            templateUrl: 'child-care-at-home.html'
        }).
        when('/services/old-age-care', {
            templateUrl: 'old-age-care-at-home.html'
        }).
        when('/services/lab-sample-collection', {
            templateUrl: 'lab-sample-collection-at-home.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

app.constant("baseUrl", "http://localhost:8080/lifecare/app/");
