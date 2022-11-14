const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

/**
 * Express initialization
 */
const app = express();
const port = process.env.port || 3000;
const server = http.createServer(app);

/**
 * Socket.io initialization
 */
const io = socketio(server);

/**
 * Use middlewares
 */
app.use(express.static(path.join(__dirname, '../public')));

/**
 * Verified socket io connection
 */
io.on('connection', (socket) => {
    // We verified is websockets are working
    console.log('Websocket connection success');

    // Welcome notification to users
    socket.emit('message', 'Welcome to free chat!');

    // We send a notification to connected users if a new client is connected
    socket.broadcast.emit('message', 'A new user has joined!');

    // We send a notification to connected users if a one client left the chat
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left!');
    });

    // We receive chat message value from client
    socket.on('chat-message', (message) => {
        console.log(message);
    });

    // We receive the current location of the user
    socket.on('current-location', (location) => {
        io.emit(
            'message',
            `Location: ${location.latitude}, ${location.longitude}`
        );
    });
});

/**
 * Server initialization
 */
server.listen(port, () => console.log(`Server UP ===> ${port}`));
