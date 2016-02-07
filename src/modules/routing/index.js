'use strict';

module.exports = function(ngModule) {

    ngModule.config(function($httpProvider, jwtInterceptorProvider) {
        jwtInterceptorProvider.tokenGetter = ['AuthService', function(AuthService) {
            return AuthService.getToken();
        }];
        $httpProvider.interceptors.push('jwtInterceptor');
    });

    ngModule.config(function($routeProvider) {
        $routeProvider
        .when('/', {
             controller: 'ssMainPageController',
            templateUrl: 'modules/pages/main/ssMainPageTemplate.html'
        })
        .when('/account/signin', {
             controller: 'ssAccountSigninPageController',
            templateUrl: 'modules/pages/account/ssAccountSigninPageTemplate.html'
        })
        .when('/account/register', {
             controller: 'ssAccountRegisterPageController',
            templateUrl: 'modules/pages/account/ssAccountRegisterPageTemplate.html'
        })
        .otherwise({
            redirectTo: '/'
        });

        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
    });

};
