exports.baseLevelPath = require.resolve('bem-sets/levels/sets');

exports.getTechs = function() {

    return require('bem').util.extend(this.__base() || {}, {
        'examples': require.resolve('../../.bem/techs/examples.js')
    });

};
