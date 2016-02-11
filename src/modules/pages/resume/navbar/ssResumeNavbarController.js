'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumeNavbarController', function($location, $scope) {

        $scope.goto = function(path) {
            $location.path(path);
        };

    });
};
