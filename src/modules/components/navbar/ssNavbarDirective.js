'use strict';

module.exports = function(ngModule) {

    ngModule.directive('ssNavbar', function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/components/navbar/ssNavbarTemplate.html',
            controller: 'ssNavbarController'
        };
    });
};
