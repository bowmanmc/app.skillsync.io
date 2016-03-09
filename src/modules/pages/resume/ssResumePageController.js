'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumePageController', function($scope, ResumeService) {

        var initialize = function() {
            ResumeService.initResume();
            $scope.ResumeService = ResumeService;
        };
        initialize();
    });

};
