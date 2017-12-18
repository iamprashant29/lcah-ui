angular.module("LifeCareApp").factory("JobApplicationFactory", function (baseUrl, $http) {

    var jobApplicationFactory = {};

    jobApplicationFactory.uploadFile = function (formdata) {
        console.log("Formdata... "+formdata);

        return $http.post(baseUrl + 'candidate/resume/upload/', formdata, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
    }

    jobApplicationFactory.saveCandidateDetails = function(candidate){
        return $http.post(baseUrl + 'candidate', candidate);
    }

    return jobApplicationFactory;
});