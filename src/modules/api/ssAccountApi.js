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

        this.checkIfEmailIsRegistered = function(email) {
            var deferred = $q.defer();
            var url = '/api/account/registered';
            $http.post(url, {
                email: email
            }).then(function(response) {
                // success status code - we have an answer
                deferred.resolve(response.data.registered);
            }, function() {
                // error status code
                deferred.resolve(false);
            });
            return deferred.promise;
        };

        this.registerNewAccount = function(accountData) {
            var deferred = $q.defer();

            var url = '/api/account';
            $http.post(url, accountData).then(function(response) {
                // success status code
                deferred.resolve(response.data);
            }, function(response) {
                // error status code
                deferred.resolve(response.data);
            });

            return deferred.promise;
        };

        this.invalidateSession = function(accountId) {
            var deferred = $q.defer();

            var url = '/api/account/signout';
            $http.post(url, {
                account: accountId
            }).then(function(response) {
                deferred.resolve(response.data);
            }, function(response) {
                deferred.resolve(response.data);
            });

            return deferred.promise;
        };
    });

};
