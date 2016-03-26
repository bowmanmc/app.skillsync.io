'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumeEducationPageController', function($scope, NavigationService, ResumeService) {

        $scope.removeEducation = function(edu2delete) {
            ResumeService.removeEducation(edu2delete);
        };

        $scope.saveEducation = function() {
            $scope.isSaving = true;
            $scope.errors = [];
            if (!$scope.input.institution) {
                $scope.errors.push('Please enter the name of the place you attended.');
            }
            if (!$scope.input.startDate) {
                $scope.errors.push('Please enter the approximate date you started there.');
            }
            if (!$scope.input.credential) {
                $scope.errors.push('Please enter the name of the degree or certificate.');
            }

            if ($scope.errors.length > 0) {
                $scope.isSaving = false;
                return;
            }

            // else, save the entry to the server and reload the Resume object
            ResumeService.addEducation($scope.input).then(function() {
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
            $scope.NavigationService = NavigationService;

            NavigationService.currentPage = 'resume';
            NavigationService.resumePage = 'education';
        };
        initialize();
    });

};
