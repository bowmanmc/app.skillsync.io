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
        // Main Dashboard
        .when('/', {
             controller: 'ssMainPageController',
            templateUrl: 'modules/pages/main/ssMainPageTemplate.html'
        })
        // Account Pages
        .when('/account', {
             controller: 'ssAccountEditPageController',
            templateUrl: 'modules/pages/account/ssAccountEditPageTemplate.html'
        })
        .when('/account/register', {
             controller: 'ssAccountRegisterPageController',
            templateUrl: 'modules/pages/account/ssAccountRegisterPageTemplate.html'
        })
        .when('/account/reset', {
             controller: 'ssAccountResetPageController',
            templateUrl: 'modules/pages/account/ssAccountResetPageTemplate.html'
        })
        .when('/account/signin', {
             controller: 'ssAccountSigninPageController',
            templateUrl: 'modules/pages/account/ssAccountSigninPageTemplate.html'
        })
        // Resume Pages
        .when('/resume', {
             controller: 'ssResumePageController',
            templateUrl: 'modules/pages/resume/ssResumePageTemplate.html'
        })
        .when('/resume/education', {
             controller: 'ssResumeEducationPageController',
            templateUrl: 'modules/pages/resume/ssResumeEducationPageTemplate.html'
        })
        .when('/resume/skills', {
             controller: 'ssResumeSkillsPageController',
            templateUrl: 'modules/pages/resume/ssResumeSkillsPageTemplate.html'
        })
        .when('/resume/work', {
             controller: 'ssResumeWorkPageController',
            templateUrl: 'modules/pages/resume/ssResumeWorkPageTemplate.html'
        })
        .otherwise({
            redirectTo: '/'
        });

        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
    });

};
