# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer). If you are connecting to a remote server host, be sure to update the IP address inside of [constants.js](./constants.js).


## Getting Started

- Follow steps inside the snek server repo to run the server side

- Run the development snake client using the `node play.js` command.

- Use the W, A, S, D keys to move the snake around on the playing board
  - W to move UP
  - S to move DOWN
  - A to move LEFT
  - D to move RIGHT

- Search for the RED blocks with your snake but avoid the obstacles! If you collide with the side of the baord, or any other player, your game is OVER.

- Have some fun! Use the pre-programmed messages to encourage the other players around you. Try pressing any of the listed keys below for some secret messages.
  - M, N, G, B, H, Y