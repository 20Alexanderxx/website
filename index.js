const express = require("express")
// require('bootstrap')
const port = 3000

const app = express(); // add this line

app.get('/', (req, res) => {
    return res.send("Hello World! Meine app läuft auf dem Server")
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
