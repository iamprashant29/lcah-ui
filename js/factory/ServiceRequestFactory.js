angular.module("LifeCareApp").factory("ServiceRequestFactory", function (baseUrl,$http) {

    var serviceRequestFactory = {};

    serviceRequestFactory.createServiceRequest = function (serviceRequest) {
        return $http.post(baseUrl + "requests", serviceRequest);
    };

    serviceRequestFactory.sendEmail = function (serviceRequest) {
        return $http.post(baseUrl + "requests/email", serviceRequest);
    };

    return serviceRequestFactory;
});