'use strict';

module.exports = function(ngModule) {

    ngModule.factory('JobCategories', function() {
        return [
            'Database Administration',
            'Project Management',
            'Software Development',
            'System Administration',
            'User Experience/Interaction Design',
            'Visual Design',
        ];
    });
};
