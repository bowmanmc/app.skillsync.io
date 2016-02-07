'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssNavbarController', function($location, $scope, AuthService) {

        var initialize = function() {
            // Has the user logged in before and gotten a token? If not,
            // redirect to the signin page...
            if (!AuthService.getToken()) {
                $location.path('/account/signin');
            }

            // Else, load the account so we can display their details in the
            // navigation bar
            AuthService.loadAccount();
            $scope.AuthService = AuthService;
        };
        initialize();
    });

};
