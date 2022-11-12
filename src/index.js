const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 3000;

/**
 * Use middlewares
 */
app.use(express.static(path.join(__dirname, '../public')));

/**
 * Server initialization
 */
app.listen(port, () => {
    console.log(`Server UP ===> ${port}`);
});
