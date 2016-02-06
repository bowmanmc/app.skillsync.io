'use strict';

module.exports = function(ngModule) {

    require('./AuthService')(ngModule);
    require('./LocalStorageService')(ngModule);

};
