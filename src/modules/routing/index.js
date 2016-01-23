'use strict';

module.exports = function(ngModule) {

    ngModule.config(function($routeProvider) {
        $routeProvider
        .when('/', {
             controller: 'ssMainPageController',
            templateUrl: 'modules/pages/main/ssMainPageTemplate.html'
        })
        .when('/signin', {
             controller: 'ssSigninPageController',
            templateUrl: 'modules/pages/signin/ssSigninPageTemplate.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    });

};
