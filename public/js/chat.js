const socket = io();

/**
 * Elements
 */
const $messageForm = document.getElementById('message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');

socket.on('message', (message) => {
    console.log(message);
});

/**
 * We send message from client to server
 */
$messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // When we submit a message the btn is disabled
    $messageFormButton.setAttribute('disabled', 'disabled');

    let message = e.target.elements.message.value;

    socket.emit('chat-message', message, (error) => {
        if (error) {
            return console.log(error);
        }

        // If the message is delivered we remove disabled attribute
        $messageFormButton.removeAttribute('disabled');
        $messageFormInput.value = '';
        $messageFormInput.focus();

        console.log('Message delivered!');
    });
});

/**
 * We cant share our current location if we want it
 */
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

        socket.emit('current-location', location, () => {
            console.log('Location shared...');
        });
    });
});
