'use strict';

module.exports = function(ngModule) {

    ngModule.service('AuthTokenService', function(jwtHelper, LocalStorageService) {
        var TOKEN_KEY = 'skillsync.auth.token';

        this.getToken = function() {
            return LocalStorageService.get(TOKEN_KEY);
        };

        this.getAccountId = function() {
            // var tokenPayload = jwtHelper.decodeToken(result.data.token);
            // console.log('Token: ' + JSON.stringify(tokenPayload, null, '  '));
            // var date = jwtHelper.getTokenExpirationDate(result.data.token);
            // console.log('Expires: ' + date);
            var tokenPayload = jwtHelper.decodeToken(this.getToken());
            return tokenPayload.accountId;
        };

        this.setToken = function(token) {
            LocalStorageService.set(TOKEN_KEY, token);
        };

    });

};
