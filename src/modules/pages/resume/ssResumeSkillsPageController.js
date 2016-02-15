'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumeSkillsPageController', function($scope) {

        $scope.saveSkill = function() {

        };

        var initialize = function() {

            $scope.skillsList = [{
                skill: 'D3.js',
                level: 'Beginner'
            }, {
                skill: 'AngularJS',
                level: 'Intermediate'
            }, {
                skill: 'Web Mapping',
                level: 'Expert'
            }];

            $scope.input = {
                level: ''
            };
        };
        initialize();
    });

};
