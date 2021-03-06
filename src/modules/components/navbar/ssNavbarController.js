'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssNavbarController', function($location, $scope, AuthService, NavigationService) {

        var initialize = function() {

            // Load the account so we can display their details in the
            // navigation bar
            AuthService.loadAccount();
            $scope.AuthService = AuthService;
            $scope.NavigationService = NavigationService;

            $scope.$watch('AuthService.token', function() {
                if(!AuthService.getToken()) {
                    $location.path('account/signin');
                }
            });
        };
        initialize();

    });
};
