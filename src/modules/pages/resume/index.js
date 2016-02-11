'use strict';

module.exports = function(ngModule) {
    require('./navbar')(ngModule);
    require('./ssResumePageController')(ngModule);
    require('./ssResumeEducationPageController')(ngModule);
    require('./ssResumeSkillsPageController')(ngModule);
    require('./ssResumeWorkPageController')(ngModule);
};
