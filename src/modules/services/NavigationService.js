'use strict';

module.exports = function(ngModule) {

    ngModule.service('NavigationService', function($location) {

        this.currentPage = 'dashboard';
        this.resumePage = 'resume';

        this.goto = function(path) {
            $location.path(path);
        };

    });

};
