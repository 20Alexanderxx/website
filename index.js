const express = require("express")
const https = require('https');
const fs = require("mz/fs");
// require('bootstrap')
const app = express(); // add this line

const {key, cert} = async () => {
	const certdir = (await fs.readdir("/etc/letsencrypt/live"))[0];

	return {
		key: await fs.readFile(`/etc/letsencrypt/live/${certdir}/privkey.pem`),
		cert: await fs.readFile(`/etc/letsencrypt/live/${certdir}/fullchain.pem`)
	}
};

const httpsServer = https.createServer({key, cert}, app).listen(443)

app.get('/', (req, res) => {
    return res.send("Hello World! Meine app läuft auf dem Server")
})

app.listen(3000, () => {
    console.log(`🚀 Server started on port 3000`)
})