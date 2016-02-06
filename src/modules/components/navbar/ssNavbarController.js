'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssNavbarController', function($scope, AuthService) {

        var initialize = function() {
            console.log('ssNavbarController initializing...');
            AuthService.loadAccount();
            $scope.AuthService = AuthService;
        };
        initialize();
    });

};
