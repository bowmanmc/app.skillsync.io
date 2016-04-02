'use strict';

module.exports = function(ngModule) {

    ngModule.factory('JobCategories', function() {
        return [

            // Software Development
            'Software Developer',
            'Front End Developer',
            'Back End Developer',
            'Full Stack Developer',

            // System Administration
            'Systems Administrator',
            'Systems Architect',
            'Dev Ops Engineer',

            // Design
            'User Experience Designer',
            'Visual Designer',

            // Misc
            'Quality Assurance Engineer',
            'Database Administrator',
            'Project Manager'
        ];
    });
};
