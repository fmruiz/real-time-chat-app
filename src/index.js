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
let counter = 0;

io.on('connection', (socket) => {
    console.log('Websocket connection success');
});

/**
 * Server initialization
 */
server.listen(port, () => console.log(`Server UP ===> ${port}`));
