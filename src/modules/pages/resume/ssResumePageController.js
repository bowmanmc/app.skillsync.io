'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumePageController', function($scope, NavigationService, ResumeService) {

        var initialize = function() {
            ResumeService.initResume();
            $scope.ResumeService = ResumeService;

            NavigationService.currentPage = 'resume';

        };
        initialize();
    });

};
