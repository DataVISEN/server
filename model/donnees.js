let fakeDatas = require('./fakeDatas')
let db = require('./db')

let VALUE_TYPES = {
	arterial_pressure_dia: "arterial_pressure_dia",
	arterial_pressure_sys: "arterial_pressure_sys",
	temperature: "temperature",
	oxygen_level: "oxygen_level",
	heartbeat: "heartbeat",
	respiratory_rate: "respiratory_rate"
}
module.exports.VALUE_TYPES = VALUE_TYPES

module.exports.getDonnes = (patientID, fromTimeStamp, toTimeStamp) => {
	return new Promise((resolve, reject) => {
		let sql = `SELECT * FROM donnees WHERE id  = ? and temps BETWEEN ? AND ? ORDER BY temps`;

		db.getDB().all(sql, [patientID, fromTimeStamp, toTimeStamp], (err, rows) => {
			if (err) {
				return reject(err)
			}
			let result = {}
			for (let row of rows) {
				if (!result[row.type]) {
					result[row.type] = []
				}
				result[row.type].push(row)
			}
			resolve(result)
		});
	})
}

module.exports.insertFakeDonnes = (id) => {
	let arterial_pressure_dia = getRandomInt(0, 30)
	let arterial_pressure_sys = getRandomInt(0, 30)
	let temperature = getRandomInt(30, 45)
	let oxygen_level = getRandomInt(0, 100)
	let heartbeat = getRandomInt(0, 240)
	let respiratory_rate = getRandomInt(0, 50)
	let date = Date.now()

	let sql = `
		INSERT INTO 'donnees' ('temps', 'type', 'valeur', 'id') VALUES
		(${date}, '${VALUE_TYPES.arterial_pressure_dia}', ${arterial_pressure_dia}, ${id}),
		(${date}, '${VALUE_TYPES.arterial_pressure_sys}', ${arterial_pressure_sys}, ${id}),
		(${date}, '${VALUE_TYPES.temperature}', ${temperature}, ${id}),
		(${date}, '${VALUE_TYPES.oxygen_level}', ${oxygen_level}, ${id}),
		(${date}, '${VALUE_TYPES.heartbeat}', ${heartbeat}, ${id}),
		(${date}, '${VALUE_TYPES.respiratory_rate}', ${respiratory_rate}, ${id});
	`
	// console.log(sql)
	db.getDB().run(sql, err => {
		if(err) {
			return console.error("Error inserting fake datas", err)
		}
		// console.log("Data inserted successfully", this)
	})
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}