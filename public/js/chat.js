const socket = io();

socket.on('message', (message) => {
    console.log(message);
});

// We send message from client to server
document.getElementById('message-form').addEventListener('submit', (e) => {
    let message = e.target.elements.message.value;

    socket.emit('chat-message', message);
});
