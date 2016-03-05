'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssDashboardPageController', function($scope, AuthService) {

        var initialize = function() {

            $scope.AuthService = AuthService;

        };
        initialize();
    });

};
