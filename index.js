const express = require("express")
// require('bootstrap')
const port = 3000

const app = express(); // add this line

app.get('/', (req, res) => {
    return res.send("Huiiii, du hast meine Seite gefunden!")
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
