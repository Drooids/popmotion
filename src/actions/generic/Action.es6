var utils = require('../../inc/utils');

const DEFAULT_PROP = 'current';

class Action {

    /*
        Create new Action

        @param properties
    */
    constructor(props, defaultProp) {
        this.values = {};
        this.set(props, defaultProp);
    }

    extend(props, defaultProp) {
        return new Action(this, defaultProp).set(props, defaultProp);
    }

    set(props, defaultProp = DEFAULT_PROP) {
        // Add properties
        for (let key in props) {
            if (props.hasOwnProperty(key) && key !== 'values') {
                this[key] = props[key];
            }
        }

        // Merge values
        if (props.values) {
            let currentValues = this.values,
                values = props.values;

            for (let key in values) {
                let existingValue = currentValues[key],
                    value = values[key],
                    newValue = {};

                if (utils.isObj(value)) {
                    newValue = value;
                } else {
                    newValue[defaultProp] = value;
                }

                currentValues[key] = existingValue ? utils.merge(existingValue, newValue) : newValue;
            }
        }

        return this;
    }

}

module.exports = Action;