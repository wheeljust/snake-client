const { connect } = require('./client.js');
console.log('Connecting ...');

connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

 const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));
  return stdin;
};

setupInput();

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

};