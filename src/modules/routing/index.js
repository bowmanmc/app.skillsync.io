'use strict';

module.exports = function(ngModule) {

    ngModule.config(function($routeProvider) {
        $routeProvider
        .when('/', {
             controller: 'ssMainPageController',
            templateUrl: 'modules/pages/ssMainPageTemplate.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    });

};
