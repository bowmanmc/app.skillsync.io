'use strict';

module.exports = function(ngModule) {

    ngModule.service('AccountApi', function($http, $q) {

        this.authenticate = function(email, password) {
            var deferred = $q.defer();

            var url = '/api/account/authenticate';
            $http.post(url, {
                email: email,
                password: password
            }).then(function(response) {
                deferred.resolve(response);
            }, function(response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

    });

};
