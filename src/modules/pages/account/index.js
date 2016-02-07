'use strict';

module.exports = function(ngModule) {
    require('./ssAccountEditPageController')(ngModule);
    require('./ssAccountRegisterPageController')(ngModule);
    require('./ssAccountResetPageController')(ngModule);
    require('./ssAccountSigninPageController')(ngModule);
};
