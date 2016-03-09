'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumeCategoryPageController', function($scope, JobCategories, ResumeService) {

        $scope.saveChanges = function() {
            $scope.errors = [];
            $scope.isSaving = true;

            // console.log('Updating Resume with changes: ' + JSON.stringify(changes));
            // ResumeService.updateResume(changes).then(function() {
            //     $scope.isSaving = false;
            // });
        };

        var initializeInputs = function() {
            if (!$scope.input) {
                $scope.input = {};
            }
            if (ResumeService.resume) {
                $scope.input.category = ResumeService.resume.category;
            }
        };

        var initialize = function() {
            $scope.isSaving = false;
            $scope.errors = [];
            $scope.JobCategories = JobCategories;
            ResumeService.initResume();
            $scope.ResumeService = ResumeService;

            $scope.$watch('ResumeService.resume', function() {
                initializeInputs();
            });
        };
        initialize();
    });

};
