const express = require("express")
const app = express(); // add this line

app.get('/', (req, res) => {
    return res.send("Hello World! Meine app läuft auf dem Server")
})

app.listen(3000, () => {
    console.log(`🚀 Server started on port 3000`)
})