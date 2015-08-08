"use strict";

var utils = require('../../inc/utils');

module.exports = function (props) {
    var args = [].slice.call(arguments),
        numArgs = args.length,
        i = 1;

    // Loop through arguments
    for (; i < numArgs; i++) {
        switch (typeof args[i]) {
            // Override properties
            case 'object':
                props = utils.merge(props, args[i]);
                break;
            // Duration
            case 'number':
                props.duration = args[i];
                break;
            // Easing
            case 'string':
                props.ease = args[i];
                break;
        }
    }

    // Default .play properties
    props.loopCount = props.yoyoCount = props.flipCount = 0;
    props.playDirection = 1;

    return props;
};
