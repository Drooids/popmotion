"use strict";

var select = require('./actor/select'),
    actionManager = require('./actions/manager'),
    presetManager = require('./actor/preset-manager'),
    routeManager = require('./routes/manager'),
    simulationManager = require('./actions/run/simulation-manager'),
    valueTypeManager = require('./value-types/manager'),
    calc = require('./inc/calc'),

    Popmotion = {

        Actor: require('./actor/Actor'),

        ActorCollection: require('./actor/ActorCollection'),

        Role: require('./role/Role'),

        ///// Actions

        Action: require('./actions/generic/Action'),

        Tween: require('./actions/play/Tween'),

        Listen: require('./actions/track/Listen'),

        Simulate: require('./actions/run/Simulate'),

        ///// Modifiers

        Input: require('./input/Input'),

        Easing: require('./actions/play/Easing'),

        Physics: require('./actions/run/Physics'),

        ///// Process

        Process: require('./process/Process'),

        select: function (items) {
            return select(items);
        },

        addAction: function () {
            actionManager.extend.apply(actionManager, arguments);
            return this;
        },

        addPreset: function () {
            presetManager.extend.apply(presetManager, arguments);
            return this;
        },

        addSimulation: function () {
            simulationManager.extend.apply(simulationManager, arguments);
            return this;
        },

        addValueType: function () {
            valueTypeManager.extend.apply(valueTypeManager, arguments);
            return this;
        },

        addRoute: function () {
            routeManager.extend.apply(routeManager, arguments);
            return this;
        },

        calc: calc
    };

module.exports = Popmotion;