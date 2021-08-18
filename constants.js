/**
 * constants.js
 * NOTE: to play snake on a host server other than local, update IP address of host server
 */

const IP = 'localhost';
const PORT = 50541;

const messages = {
  m: 'Move it buddy!',
  n: 'Nice try!',
  g: 'Good game!',
  y: 'YAHOO!',
  b: 'Bye friends!',
  h: 'Yum, SNAKE FOOD!',
  o: 'Oh Noooo!'
};

const movements = {
  w: 'up',
  s: 'down',
  a: 'left',
  d: 'right',
};

module.exports = {
  IP,
  PORT,
  messages,
  movements,
};