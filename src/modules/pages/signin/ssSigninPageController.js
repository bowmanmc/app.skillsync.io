'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssSigninPageController', function($scope) {

        $scope.checkAuth = function() {
            var email = $scope.input.email;
            var password = $scope.input.password;

            // Some quick and dirty form validation... see how to do this
            // better with ember...
            $scope.errors = [];
            if (!email || email.indexOf('@') < 0 || email.indexOf('.') < 0) {
                $scope.errors.push('Please enter your email address.');
            }
            if (!password) {
                $scope.errors.push('Please enter your password.');
            }

            // no need to bother our server if we have errors to fix
            if ($scope.errors.length > 0) {
                return;
            }

            // Let's check the email/password at the server and get a token
            console.log('Signing in with ' + email + '/"' + password + '"...');
        };

        var initialize = function() {
            console.log('ssSigninPageController initializing...');
            $scope.errors = [];
            $scope.input = {};
        };
        initialize();
    });

};
