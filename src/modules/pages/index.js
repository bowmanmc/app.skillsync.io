'use strict';

module.exports = function(ngModule) {
    require('./account')(ngModule);
    require('./main')(ngModule);
};
