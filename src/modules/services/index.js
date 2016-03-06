'use strict';

module.exports = function(ngModule) {

    require('./AuthService')(ngModule);
    require('./FormService')(ngModule);
    require('./HashService')(ngModule);
    require('./JobCategories')(ngModule);
    require('./LocalStorageService')(ngModule);
    require('./ResumeService')(ngModule);
    require('./SalaryRanges')(ngModule);

};
