'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumePageController', function($scope, ResumeService) {

        var initialize = function() {
            console.log('ssResumePageController initializing...');

            ResumeService.initResume();
            $scope.ResumeService = ResumeService;

        };
        initialize();
    });

};
