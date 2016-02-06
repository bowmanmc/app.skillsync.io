'use strict';

module.exports = function(ngModule) {

    ngModule.config(function($routeProvider, $locationProvider) {
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

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });

};
