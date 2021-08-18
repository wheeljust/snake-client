/**
 * Run play.js to connect to server and play snake game
 */

const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');

setupInput(connect());