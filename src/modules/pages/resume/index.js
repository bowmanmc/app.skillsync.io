'use strict';

module.exports = function(ngModule) {
    require('./navbar')(ngModule);
    require('./ssResumePageController')(ngModule);
    require('./ssResumeCategoryPageController')(ngModule);
    require('./ssResumeEducationPageController')(ngModule);
    require('./ssResumeProjectsPageController')(ngModule);
    require('./ssResumeSkillsPageController')(ngModule);
    require('./ssResumeSummaryPageController')(ngModule);
    require('./ssResumeWorkPageController')(ngModule);
};
