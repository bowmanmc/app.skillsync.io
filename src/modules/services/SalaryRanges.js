'use strict';

module.exports = function(ngModule) {

    ngModule.factory('SalaryRanges', function() {
        return [
            '$30,000 - 50,000',
            '$40,000 - 60,000',
            '$50,000 - 70,000',
            '$60,000 - 80,000',
            '$70,000 - 90,000',
            '$80,000 - 100,000',
            '$100,000 - 125,000',
            '$125,000 - 150,000',
            '$150,000+'
        ];
    });
};
