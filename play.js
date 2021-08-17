const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

console.log('Connecting ...');

const connObj = connect();

setupInput(connObj);

