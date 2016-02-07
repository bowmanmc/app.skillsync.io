'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssAccountResetPageController', function($location, $scope, AccountApi, AuthService) {

        var initialize = function() {
            $scope.errors = [];
            $scope.input = {};
        };
        initialize();
    });

};
