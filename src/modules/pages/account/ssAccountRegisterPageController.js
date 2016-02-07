'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssAccountRegisterPageController', function($location, $scope, AccountApi, AuthService) {

        var validateEmailInput = function() {
            // remove email errors
            $scope.errors = $scope.errors.filter(error => {
                return (error.indexOf('email') > -1);
            });

            // some quick checking to make sure we have a non-empty field
            // that has at least an @ and a . in it.
            var email = $scope.input.email;
            if (!email || email.indexOf('@') < 0 || email.indexOf('.') < 0) {
                $scope.errors.push('Please enter your email address.');
                return;
            }

            // check with the server to see if the email address is already
            // registered. ** this is asynchronous, so the validateEmailInput
            // function will return before this is finished.
            AccountApi.checkIfEmailIsRegistered($scope.input.email).then(function(isRegistered) {
                if (isRegistered) {
                    var msg = `Email address "${$scope.input.email}" is already registered.`;
                    $scope.errors.push(msg);
                }
            });
        };

        $scope.registerAccount = function() {

            $scope.errors = [];
            var name = $scope.input.name;
            var email = $scope.input.email;
            var password = $scope.input.password;
            if (!name) {
                $scope.errors.push('Please enter your name.');
            }
            if (!email || email.indexOf('@') < 0 || email.indexOf('.') < 0) {
                $scope.errors.push('Please enter your email address.');
            }
            if (!password) {
                $scope.errors.push('Please enter your password.');
            }

            if ($scope.errors.length > 0) {
                // no need to bother the server
                return;
            }

            // We've got some valid inputs, let's try them on the server.
            $scope.isSaving = true;
            AccountApi.registerNewAccount({
                email: email,
                name: name,
                password: password
            }).then(function(result) {
                console.log('Controller got result: ' + JSON.stringify(result, null, '    '));
                if (result.accountId) {
                    // Account was created successfully! Sign them in and
                    // redirect back to the dashboard.
                    AuthService.setToken(result.token);
                    $location.path('/');
                }
                else {
                    // server errors!
                    var msg = 'An error occurred while registering your new account!';
                    if (result.message) {
                        msg = result.message;
                    }
                    $scope.errors.push(msg);
                }
                $scope.isSaving = false;
            });
        };

        $scope.checkEmailInput = function() {
            validateEmailInput();
        };

        var initialize = function() {
            $scope.errors = [];
            $scope.isSaving = false;
            $scope.input = {};
        };
        initialize();
    });

};
