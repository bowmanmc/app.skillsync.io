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

        this.getAccount = function(accountId) {
            var deferred = $q.defer();

            var url = '/api/account/' + accountId;
            $http.get(url).then(function(response) {
                //console.log('Got response: ' + JSON.stringify(response, null, '  '));
                if (response.data._id) {
                    // we got back a valid user...
                    deferred.resolve(response.data);
                }
                else {
                    // some sort of error...
                    deferred.resolve(null);
                }
            });
            return deferred.promise;
        };
    });

};
