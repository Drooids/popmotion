var Action = require('../generic/Action.es6');

const DEFAULT_PROP = 'to';

class Tween extends Action {

    /*
        Create new Tween

        @param properties
    */
    constructor(props) {
        super(props, DEFAULT_PROP);
    }

    extend(props) {
        return new Tween(props, DEFAULT_PROP).set(props, DEFAULT_PROP);
    }

}

module.exports = Tween;