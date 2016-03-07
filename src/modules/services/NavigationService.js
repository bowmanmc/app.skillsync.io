'use strict';

module.exports = function(ngModule) {

    ngModule.service('NavigationService', function($location) {

        this.currentPage = 'dashboard';

        this.goto = function(path) {
            $location.path(path);
        };

    });

};
