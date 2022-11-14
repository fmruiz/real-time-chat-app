const socket = io();

socket.on('message', (message) => {
    console.log(message);
});

// We send message from client to server
document.getElementById('message-form').addEventListener('submit', (e) => {
    let message = e.target.elements.message.value;

    socket.emit('chat-message', message);
});

// We cant share our current location if we want it
document.getElementById('send-location').addEventListener('click', (e) => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser');
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;

        const location = {
            latitude: coords.latitude,
            longitude: coords.longitude,
        };

        socket.emit('current-location', location);
    });
});
