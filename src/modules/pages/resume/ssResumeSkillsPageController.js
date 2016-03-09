'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumeSkillsPageController', function($scope, ResumeService) {

        $scope.removeSkill = function(skill2delete) {
            ResumeService.removeSkill(skill2delete);
        };

        $scope.saveSkill = function() {
            $scope.isSaving = true;
            $scope.errors = [];
            if (!$scope.input.skill) {
                $scope.errors.push('Please enter a skill, tool, or framework.');
            }
            if (!$scope.input.level) {
                $scope.errors.push('Please indicate your skill level.');
            }

            if ($scope.errors.length > 0) {
                $scope.isSaving = false;
                return;
            }

            // else, save the skill to the server and reload the Resume object
            ResumeService.addSkill($scope.input).then(function() {
                $scope.isSaving = false;
                $scope.input = {};
            });
        };

        var initialize = function() {
            $scope.isSaving = false;
            $scope.errors = [];
            $scope.input = {};
            ResumeService.initResume();
            $scope.ResumeService = ResumeService;
        };
        initialize();
    });

};
