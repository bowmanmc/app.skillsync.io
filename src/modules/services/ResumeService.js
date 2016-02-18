'use strict';

module.exports = function(ngModule) {

    ngModule.service('ResumeService', function($q, ResumeApi, AuthService) {

        this.resume = null;

        this.initResume = function() {
            if (this.resume) {
                return;
            }

            // Make sure a resume object is loaded
            var svc = this;
            svc.loadResume().then(function() {
                // no resume, create it
                if (!svc.resume) {
                    svc.createResume();
                }
            });
        };

        this.updateResume = function(changes) {
            var deferred = $q.defer();

            var svc = this;
            var accountId = AuthService.getAccountId();
            ResumeApi.updateResume(accountId, changes).then(function() {
                // now that we've update it, get the canonical version
                // from the server
                svc.loadResume().then(function() {
                    deferred.resolve(svc.resume);
                });
            });

            return deferred.promise;
        };

        this.createResume = function() {
            var deferred = $q.defer();
            var svc = this;
            ResumeApi.createResume(AuthService.getAccountId()).then(function() {
                svc.loadResume().then(function() {
                    deferred.resolve(svc.resume);
                });
            });

            return deferred.promise;
        };

        this.loadResume = function() {
            var deferred = $q.defer();

            var svc = this;
            if (AuthService.token) {
                var accountId = AuthService.getAccountId();
                ResumeApi.getResume(accountId).then(function(resume) {
                    svc.resume = resume;
                    deferred.resolve(svc.resume);
                });
            }

            return deferred.promise;
        };

    });
};
