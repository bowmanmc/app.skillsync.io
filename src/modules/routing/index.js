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
        // Dashboard
        .when('/', {
             controller: 'ssDashboardPageController',
            templateUrl: 'modules/pages/dashboard/ssDashboardPageTemplate.html'
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
        .when('/resume/projects', {
             controller: 'ssResumeProjectsPageController',
            templateUrl: 'modules/pages/resume/ssResumeProjectsPageTemplate.html'
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
