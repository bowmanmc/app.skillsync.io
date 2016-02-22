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

        this.removeSkill = function(skill) {
            var deferred = $q.defer();

            var index = this.resume.skills.indexOf(skill);
            if (index > -1) {
                this.resume.skills.splice(index, 1);

                this.updateResume({
                    skills: this.resume.skills
                }).then(function(result) {
                    deferred.resolve(result);
                });
            }
            else {
                deferred.resolve();
            }

            return deferred.promise;
        };

        this.addSkill = function(skill) {
            var deferred = $q.defer();

            var skills = [];
            if (this.resume && this.resume.skills.length) {
                skills = this.resume.skills;
            }
            skills.push(skill);
            this.updateResume({
                skills: skills
            }).then(function(result) {
                deferred.resolve(result);
            });

            return deferred.promise;
        };

        this.removeWork = function(workItem) {
            var deferred = $q.defer();

            var index = this.resume.work.indexOf(workItem);
            if (index > -1) {
                this.resume.work.splice(index, 1);

                this.updateResume({
                    work: this.resume.work
                }).then(function(result) {
                    deferred.resolve(result);
                });
            }
            else {
                deferred.resolve();
            }

            return deferred.promise;
        };

        this.addWork = function(workItem) {
            var deferred = $q.defer();

            var w = [];
            if (this.resume && this.resume.work.length) {
                w = this.resume.work;
            }
            w.push(workItem);

            this.updateResume({
                work: w
            }).then(function(newResume) {
                deferred.resolve(newResume);
            });

            return deferred.promise;
        };

        this.updateResume = function(changes) {
            var deferred = $q.defer();
            console.log('Updating resume with changes: ' + JSON.stringify(changes));
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
