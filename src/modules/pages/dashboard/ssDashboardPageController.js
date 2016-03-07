'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssDashboardPageController', function($scope, AuthService, NavigationService) {

        var initialize = function() {
            $scope.AuthService = AuthService;
            NavigationService.currentPage = 'dashboard';
        };
        initialize();
    });

};
