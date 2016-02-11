'use strict';

module.exports = function(ngModule) {
    require('./navbar')(ngModule);
    require('./ssResumePageController')(ngModule);
    require('./ssResumeSkillsPageController')(ngModule);
};
