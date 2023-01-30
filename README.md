# Missions (WIP)
The frontend for a party game app where players compete to complete secret missions against their friends.


![Alt Text](https://i.ibb.co/BwS1NPM/Screenshot-2023-01-06-at-11-59-45.png)

## How It's Made
The frontend for this party game application is built using React, Tailwind, and Socket.IO. The app allows players to engage in dynamic and interactive competition, completing secret missions against their friends. The "Create Game" feature utilizes Socket.IO to create a room and generate a randomized 4 letter room code, enabling other players to join the game by entering the designated room code. Upon joining the game, players are brought to the lobby, which displays a comprehensive list of all connected users. The host has the ability to initiate the game through the "Start Game" feature, at which point players are randomly assigned missions from the database to complete.

**Full-stack tech used:** JavaScript, React, Node.js, MongoDB, Mongoose, Tailwind, Socket.IO


## Optimizations

Further optimizations include adding categories for missions that users can toggle depending on their environment and the kind of game they want to play. Ability to add custom missions, settings for user to choose number of missions and mission resets. Adding a hard mode where players must complete missions against a certain user instead of any player.

## Lessons Learned:

- [x] Socketio
