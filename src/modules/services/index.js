'use strict';

module.exports = function(ngModule) {

    require('./AuthTokenService')(ngModule);
    require('./LocalStorageService')(ngModule);

};
