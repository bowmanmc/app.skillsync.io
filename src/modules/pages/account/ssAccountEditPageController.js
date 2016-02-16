'use strict';

module.exports = function(ngModule) {

    ngModule.controller('ssAccountEditPageController', function($location, $scope, AccountApi, AuthService) {

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
            console.log('Changeset: ' + JSON.stringify(changeset));

            if (angular.equals({}, changeset)) {
                $scope.errors.push('No changes detected...');
                $scope.isSaving = false;
                return;
            }

            console.log('Updating Account...');
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
                    AccountApi.updateAccount(AuthService.account._id, changeset).then(function(error) {
                        if (error) {
                            $scope.errors.push(error);
                        }
                        AuthService.loadAccount();
                        $scope.isSaving = false;
                    });
                });
            }
            else {
                // the user insn't changing their email, so just update the account
                AccountApi.updateAccount(AuthService.account._id, changeset).then(function(error) {
                    if (error) {
                        $scope.errors.push(error);
                    }
                    AuthService.loadAccount();
                    $scope.isSaving = false;
                });
            }
        };

        var initialize = function() {
            $scope.errors = [];
            $scope.input = {};
            $scope.AuthService = AuthService;
        };
        initialize();
    });

};
