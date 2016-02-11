'use strict';

module.exports = function(ngModule) {

    ngModule.directive('ssResumeNavbar', function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/pages/resume/navbar/ssResumeNavbarTemplate.html',
            controller: 'ssResumeNavbarController'
        };
    });
};
