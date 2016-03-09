'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumeNavbarController', function($location, $scope, NavigationService, ResumeService) {

        $scope.input = {
            selection: '/resume' // default selection
        };

        $scope.goto = function(path) {
            $location.path(path);
        };

        $scope.select = function() {
            $location.path($scope.input.selection);
        };

        var initialize = function() {
            $scope.ResumeService = ResumeService;
            $scope.input.selection = $location.path();

            NavigationService.currentPage = 'resume';
        };
        initialize();
    });
};
