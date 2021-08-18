const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');

const connObj = connect();

setupInput(connObj);

