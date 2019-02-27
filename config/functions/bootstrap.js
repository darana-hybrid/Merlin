'use strict';

// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('@babel/register')({
  presets: [[require.resolve('@babel/preset-env'), {targets: {node: 'current'}, useBuiltIns: 'entry'}]],
});
require('@babel/polyfill');

// Import the rest of our application.
// module.exports = require('./server.js')

// const config = require('./config.js');

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports = cb => {
  cb();
};
