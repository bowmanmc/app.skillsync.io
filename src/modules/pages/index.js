'use strict';

module.exports = function(ngModule) {
    require('./account')(ngModule);
    require('./dashboard')(ngModule);
    require('./resume')(ngModule);
};
