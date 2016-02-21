'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumeWorkPageController', function($scope, ResumeService) {

        $scope.saveWork = function() {
            $scope.isSaving = true;
            $scope.errors = [];
            if (!$scope.input.name) {
                $scope.errors.push('Please enter the name of the place you worked.');
            }
            if (!$scope.input.startDate) {
                $scope.errors.push('Please enter the approximate date you started employment there.');
            }
            if (!$scope.input.description) {
                $scope.errors.push('Please enter a few paragraphs about what you did there.');
            }

            if ($scope.errors.length > 0) {
                $scope.isSaving = false;
                return;
            }

            // else, save the work entry to the server and reload the Resume object
            ResumeService.addWork($scope.input).then(function() {
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
