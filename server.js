const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001 || process.env.PORT;

const { runCode } = require('./server/controllers/runcode')

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// To use Production Build
app.use(express.static('client/build'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.post('/api/run', async (req, res) => {
    // console.log(req.body);
    const { languageId, code, input } = req.body;
    runCode(languageId, code, input, res)
})

app.listen(PORT, () => {
    console.log("Server started on: ", PORT)
})