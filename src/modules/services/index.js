'use strict';

module.exports = function(ngModule) {

    require('./AuthService')(ngModule);
    require('./HashService')(ngModule);
    require('./LocalStorageService')(ngModule);
    require('./ResumeService')(ngModule);

};
