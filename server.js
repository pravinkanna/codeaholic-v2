const express = require('express');
const app = express();
const PORT = 3001 || process.env.PORT;

const { runCode } = require('./server/controllers/runcode')

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.post('/api/run', async (req, res) => {
    // console.log(req.body);
    const { languageId, code, input } = req.body;
    runCode(languageId, code, input, res)
    // console.log("RESULT", result);
})

app.listen(PORT, () => {
    console.log("Server started on: ", PORT)
})