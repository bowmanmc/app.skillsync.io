'use strict';

module.exports = function(ngModule) {

    ngModule.service('ResumeApi', function($http, $q) {

        this.createResume = function(accountId) {
            var deferred = $q.defer();

            var url = '/api/resume';
            $http.post(url, {
                accountId: accountId
            }).then(function(response) {
                deferred.resolve(response.data);
            });

            return deferred.promise;
        };

        this.getResume = function(accountId) {
            var deferred = $q.defer();

            var url = '/api/resume/' + accountId;
            $http.get(url).then(function(response) {
                //console.log('Got response: ' + JSON.stringify(response, null, '  '));
                if (response.data._id) {
                    deferred.resolve(response.data);
                }
                else {
                    // some sort of error...
                    deferred.resolve(null);
                }
            }, function() {
                // error (404 or 500)
                deferred.resolve(null);
            });
            return deferred.promise;
        };

    });
};
