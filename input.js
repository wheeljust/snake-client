// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

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
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write('Move: up');
  }

  if (key === 's') {
    connection.write('Move: down');
  }

  if (key === 'a') {
    connection.write('Move: left');
  }

  if (key === 'd') {
    connection.write('Move: right');
  }

};

module.exports = { setupInput };