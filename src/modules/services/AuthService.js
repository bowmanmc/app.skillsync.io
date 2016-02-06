'use strict';

module.exports = function(ngModule) {

    ngModule.service('AuthService', function(jwtHelper, AccountApi, LocalStorageService) {
        var TOKEN_KEY = 'skillsync.auth.token';

        this.token = null;
        this.account = null;

        this.loadAccount = function() {
            var svc = this;

            if (!this.token) {
                this.loadToken();
            }

            // If we have a token, the user has signed in at some point
            if (this.token) {
                // load the account
                var accountId = this.getAccountId();
                AccountApi.getAccount(accountId).then(function(account) {
                    svc.account = account;
                });
            }
            // else, the user has not signed in yet... no account to get.
        };

        this.getAccountId = function() {
            if (this.token) {
                var tokenPayload = jwtHelper.decodeToken(this.token);
                return tokenPayload.accountId;
            }
            return null;
        };

        this.getToken = function() {
            if (!this.token) {
                this.loadToken();
            }
            return this.token;
        };

        this.loadToken = function() {
            this.token = LocalStorageService.get(TOKEN_KEY);
        };

        this.setToken = function(token) {
            LocalStorageService.set(TOKEN_KEY, token);
            this.loadAccount();
        };

    });

};
