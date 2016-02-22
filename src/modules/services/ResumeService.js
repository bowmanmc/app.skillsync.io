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

        this.addItemToArray = function(arrayName, item) {
            var deferred = $q.defer();

            var items = [];
            if (this.resume && this.resume[arrayName].length) {
                items = this.resume[arrayName];
            }
            items.push(item);
            var changes = {};
            changes[arrayName] = items;
            this.updateResume(changes).then(function(result) {
                deferred.resolve(result);
            });

            return deferred.promise;
        };

        this.addEducation = function(edu) {
            var deferred = $q.defer();
            this.addItemToArray('education', edu).then(function(result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        };

        this.addSkill = function(skill) {
            var deferred = $q.defer();
            this.addItemToArray('skills', skill).then(function(result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        };

        this.addWork = function(workItem) {
            var deferred = $q.defer();
            this.addItemToArray('work', workItem).then(function(result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        };

        this.removeItemFromArray = function(arrayName, item) {
            var deferred = $q.defer();

            var index = this.resume[arrayName].indexOf(item);
            if (index > -1) {
                this.resume[arrayName].splice(index, 1);
                var changes = {};
                changes[arrayName] = this.resume[arrayName];
                this.updateResume(changes).then(function(result) {
                    deferred.resolve(result);
                });
            }
            else {
                deferred.resolve();
            }

            return deferred.promise;
        };

        this.removeEducation = function(edu) {
            var deferred = $q.defer();
            this.removeItemFromArray('education', edu).then(function(result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        };

        this.removeSkill = function(skill) {
            var deferred = $q.defer();
            this.removeItemFromArray('skills', skill).then(function(result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        };

        this.removeWork = function(workItem) {
            var deferred = $q.defer();
            this.removeItemFromArray('work', workItem).then(function(result) {
                deferred.resolve(result);
            });
            return deferred.promise;
        };


        this.updateResume = function(changes) {
            var deferred = $q.defer();
            var svc = this;
            var accountId = AuthService.getAccountId();
            console.log('Making changes to resume: ' + JSON.stringify(changes));
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
            svc.isLoading = true;

            if (AuthService.token) {
                var accountId = AuthService.getAccountId();
                ResumeApi.getResume(accountId).then(function(resume) {
                    svc.resume = resume;
                    svc.isLoading = false;
                    deferred.resolve(svc.resume);
                });
            }
            else {
                // Not logged in... something is wrong. No resume to load.
                deferred.resolve();
            }

            return deferred.promise;
        };

    });
};
