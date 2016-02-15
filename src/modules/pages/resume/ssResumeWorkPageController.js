'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssResumeWorkPageController', function($scope) {

        var initialize = function() {
            console.log('ssResumeWorkPageController initializing...');

            $scope.work = [{
                name: 'Applied Information Sciences',
                url:  'http://appliedis.com',
                startDate: '2014-01',
                endDate: null,
                summary: 'Technical Architect - ',
                skillsUsed: 'D3.js, AngularJS, Web Mapping'
            }, {
                name: 'Booz Allen Hamilton',
                url: 'http://bah.com',
                startDate: '2011-03',
                endDate: '2014-01',
                summary: 'Software Engineer',
                skillsUsed: 'Python, jQuery, Django'
            }];

        };
        initialize();
    });

};
