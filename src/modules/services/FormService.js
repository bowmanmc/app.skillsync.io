'use strict';

module.exports = function(ngModule) {

    ngModule.service('FormService', function() {

        this.buildChangeset = function(input, model) {
            var changes = {};
            var attrs = Object.keys(input);
            attrs.forEach(function(attr) {
                if (input[attr] && input[attr] !== model[attr]) {
                    changes[attr] = input[attr];
                }
            });
            return changes;
        };

    });

};
