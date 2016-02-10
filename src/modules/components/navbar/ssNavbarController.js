'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssNavbarController', function($location, $scope, AuthService) {

        $scope.goto = function(path) {
            $location.path(path);
        };

        var initialize = function() {

            // Load the account so we can display their details in the
            // navigation bar
            AuthService.loadAccount();
            $scope.AuthService = AuthService;

            $scope.$watch('AuthService.token', function() {
                if(!AuthService.getToken()) {
                    $location.path('account/signin');
                }
            });
        };
        initialize();

    });
};
