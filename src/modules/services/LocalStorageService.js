'use strict';

module.exports = function(ngModule) {

    ngModule.service('LocalStorageService', function($window) {

        var localStorage = $window.localStorage;

        this.get = function(key) {
            var str = localStorage.getItem(key);
            return angular.fromJson(str);
        };

        this.set = function(key, data) {
            localStorage.setItem(key, angular.toJson(data));
        };

        this.remove = function(key) {
            localStorage.removeItem(key);
        };
    });

};
