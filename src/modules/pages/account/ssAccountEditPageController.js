'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssAccountEditPageController', function($location, $scope, AccountApi, AuthService) {

        var initialize = function() {
            $scope.errors = [];
            $scope.input = {};
            $scope.AuthService = AuthService;
        };
        initialize();
    });

};
