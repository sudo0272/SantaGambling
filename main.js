const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile('intro.html');
});

app.listen(PORT, () => {
    console.log('Server running on', PORT);
});
