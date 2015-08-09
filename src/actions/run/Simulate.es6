var Action = require('../generic/Action.es6');

class Simulate extends Action {

    /*
        Create new Tween

        @param properties
    */
    constructor(props) {
        super(props);
        this.action = 'simulate';
    }

    extend(props) {
        return new Simulate(props).set(props);
    }

}

module.exports = Simulate;