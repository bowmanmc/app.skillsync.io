'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssAccountEditPageController', function($location, $scope, AccountApi, AuthService, HashService) {

        $scope.updateAccount = function() {

            $scope.isSaving = true;
            $scope.errors = [];
            var name = $scope.input.name;
            var email = $scope.input.email;

            var changeset = {};
            if (name && name !== AuthService.account.name) {
                // name can be anything, just not empty
                changeset.name = name;
            }

            if (email && email !== AuthService.account.email) {
                changeset.email = email;
            }

            // Make sure the user changed something before bothering the server
            if (angular.equals({}, changeset)) {
                $scope.errors.push('No changes detected...');
                $scope.isSaving = false;
                return;
            }

            var updateAccount = function(changes) {
                AccountApi.updateAccount(AuthService.account._id, changes).then(function(error) {
                    if (error) {
                        $scope.errors.push(error);
                    }
                    AuthService.loadAccount();
                    $scope.isSaving = false;
                });
            };

            if (changeset.email) {
                // check if the new email is registered first...
                AccountApi.checkIfEmailIsRegistered(changeset.email).then(function(isRegistered) {
                    if (isRegistered) {
                        var msg = `Email address "${changeset.email}" is already registered.`;
                        $scope.errors.push(msg);
                        $scope.isSaving = false;
                        return;
                    }
                    // else, update the account
                    updateAccount(changeset);
                });
            }
            else {
                // the user insn't changing their email, so just update the account
                updateAccount(changeset);
            }
        };

        var initialize = function() {
            $scope.errors = [];
            $scope.input = {};
            $scope.AuthService = AuthService;

            $scope.$watch('AuthService.account', function() {
                var hash = '';
                if (AuthService.account && AuthService.account.email) {
                    hash = HashService.md5(AuthService.account.email);
                }
                $scope.gravatar = `http://www.gravatar.com/avatar/${ hash }?s=256`;
            });
        };
        initialize();
    });

};
