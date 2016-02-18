'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumePageController', function($scope, ResumeService) {

        $scope.saveChanges = function() {
            $scope.errors = [];
            $scope.isSaving = true;

            // only bother the server if there were changes made...
            var changes = {};
            if ($scope.input.years !== ResumeService.resume.years) {
                changes.years = $scope.input.years;
            }
            if ($scope.input.location !== ResumeService.resume.location) {
                changes.location = $scope.input.location;
            }
            if ($scope.input.summary !== ResumeService.resume.summary) {
                changes.summary = $scope.input.summary;
            }

            if (angular.equals({}, changes)) {
                $scope.errors.push('No changes detected...');
                $scope.isSaving = false;
                return;
            }

            console.log('Updating Resume with changes: ' + JSON.stringify(changes));
            ResumeService.updateResume(changes).then(function() {
                $scope.isSaving = false;
            });
        };

        var initializeInputs = function() {
            if (!$scope.input) {
                $scope.input = {};
            }
            if (ResumeService.resume) {
                $scope.input.years = ResumeService.resume.years;
                $scope.input.location = ResumeService.resume.location;
                $scope.input.summary = ResumeService.resume.summary;
            }
        };

        var initialize = function() {
            $scope.isSaving = false;
            $scope.errors = [];
            ResumeService.initResume();
            $scope.ResumeService = ResumeService;
            $scope.$watch('ResumeService.resume', function() {
                console.log('ResumeService.resume changed!');
                initializeInputs();
            });
        };
        initialize();
    });

};
