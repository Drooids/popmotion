var Action = require('../generic/Action.es6');

const DEFAULT_PROP = 'to';

const DEFAULT_VALUE_PROPS = {
    from: 0,
    to: 0,
    min: undefined,
    max: undefined
};

const DEFAULT_ACTION_PROPS = {
    dilate: 1,
    duration: 400,
    ease: 'easeInOut',
    loop: false,
    yoyo: false,
    flip: false
};

class Tween extends Action {

    /*
        Create new Tween

        @param properties
    */
    constructor(props) {
        this.action = 'tween';
        this.delay = 0;
        this.duration = 400;
        this.ease = 'easeOut';
        this.playDirection = 1;
        this.stagger = 0;
        this.steps = 0;
        this.set(props, DEFAULT_PROP);
    }

    extend(props) {
        return new Tween(props, DEFAULT_PROP).set(props, DEFAULT_PROP);
    }
}

module.exports = Tween;