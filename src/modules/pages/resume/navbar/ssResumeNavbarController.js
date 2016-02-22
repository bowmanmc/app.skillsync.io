'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumeNavbarController', function($location, $scope, ResumeService) {

        $scope.goto = function(path) {
            $location.path(path);
        };

        var initialize = function() {
            $scope.ResumeService = ResumeService;
        };
        initialize();
    });
};
