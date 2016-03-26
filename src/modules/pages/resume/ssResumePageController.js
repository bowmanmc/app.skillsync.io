'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumePageController', function($scope, NavigationService, ResumeService) {

        var initialize = function() {
            ResumeService.initResume();
            $scope.ResumeService = ResumeService;
            $scope.NavigationService = NavigationService;

            NavigationService.currentPage = 'resume';
            NavigationService.resumePage = 'resume';
        };
        initialize();
    });

};
