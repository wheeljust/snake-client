const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  },);

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // log when connected to server and pass user initials to the server
  conn.on('connect', () => {
    console.log("Connection to server established.");
    conn.write('Name: JWW');
  });

  conn.on('data', (data) => {
    console.log('Server Message:', data);
  });

  conn.on('end', (data) => {
    console.log('Disconnected from server, Good Bye!');
  });
  
  return conn;
};

module.exports = { connect };