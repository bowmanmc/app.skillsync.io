'use strict';

module.exports = function(ngModule) {
    require('./ssAccountApi')(ngModule);
    require('./ssResumeApi')(ngModule);
};
