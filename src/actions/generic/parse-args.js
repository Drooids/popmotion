"use strict";

var utils = require('../../inc/utils');

module.exports = function (base, override) {
    return (typeof override === 'object') ? utils.merge(base, override) : base;
};