'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumeProjectsPageController', function($scope, ResumeService) {

        $scope.removeProject = function(proj2delete) {
            ResumeService.removeProject(proj2delete);
        };

        $scope.saveProject = function() {
            $scope.isSaving = true;
            $scope.errors = [];
            if (!$scope.input.name) {
                $scope.errors.push('Please enter the name of the project.');
            }
            if (!$scope.input.description) {
                $scope.errors.push('Please enter a description of the project.');
            }

            if ($scope.errors.length > 0) {
                $scope.isSaving = false;
                return;
            }

            // else, save the project to the server and reload the Resume object
            ResumeService.addProject($scope.input).then(function() {
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
