var Action = require('../generic/Action.es6');

const DEFAULT_PROP = 'link';

class Track extends Action {

    /*
        Create new Tween

        @param properties
    */
    constructor(props) {
        super(props, DEFAULT_PROP);
        this.action = 'track';
    }

    extend(props) {
        return new Track(props, DEFAULT_PROP).set(props, DEFAULT_PROP);
    }

}

module.exports = Track;