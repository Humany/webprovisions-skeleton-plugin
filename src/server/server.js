const express = require('express');
const path = require('path');
const opn = require('opn');
const openport = require('openport');

const app = express();

// Serve static files
app.use(express.static(path.resolve('dist')));

// Route
app.get('/', (req, res) => {

    res.sendFile(path.resolve('dist/index.html'));
});

openport.find(
    {
        startingPort: 3000,
        endingPort: 3100,
    },
    function (err, port) {

        // Serve app
        app.listen(port, () => {

            console.log(`App listening on port ${port}`);

            // Open browser
            opn(`http://localhost:${port}`);
        });

    });
