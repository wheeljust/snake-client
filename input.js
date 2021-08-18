const { messages, movements } = require('./constants');

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));
  return stdin;
};

/**
 * Handle key strokes as user inputs to control the snake
 * Include ability to use ctrl + c to quit the game
 */

const handleUserInput = function(key) {
  if (key === '\u0003') process.exit();
  if (movements[key]) connection.write(`Move: ${movements[key]}`);
  if (messages[key]) connection.write(`Say: ${messages[key]}`);
};

module.exports = { setupInput };