let http = require('http')
let fs = require('fs')
let WebSocket = require('ws')

let patient = require('./model/patient')
let donnees = require('./model/donnees')

let server = http.createServer((req, res) => {
	fs.readFile('./index.html', 'utf-8', (error, content) => {
		res.writeHead(200, { "Content-Type": "text/html" })
		res.end(content)
	})
})

server.listen(8081)

let wss = new WebSocket.Server({ port: 8080 })
wss.on('connection', ws => {
	ws.on('message', msg => {
		let json = readEventMessage(msg)
		if(json == undefined) {
			console.error("Invalid message: ", msg)
			return
		}
		console.log(json)

		let id = json.payload.id
		let from = json.payload.from
		let to = json.payload.to
		let payload = null

		switch (json.type) {
			case "patientFetch":
				ws.send(createEventMessage("patientSent", patient.getPatient(id)))
				break
			case "donneesFetch":
				ws.send(createEventMessage("donneesSent", donnees.getDonnes(id, from, to)))
				break
		}
	})
})

function readEventMessage(rawEvent) {
	return JSON.parse(rawEvent)
}

function createEventMessage(eventName, eventPayload) {
	return JSON.stringify({
		type: eventName,
		payload: eventPayload
	})
}