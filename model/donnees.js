let fakeDatas = require('./fakeDatas')
let sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database(__dirname + "/../db.db", (err) => {
  if (err) {
    console.error(err.message)
  }
  else{
	  console.log('Connected to the server database.')
  }
})


module.exports.VALUE_TYPES = {
	arterial_pressure_dia: "arterial_pressure_dia",
	arterial_pressure_sys: "arterial_pressure_sys",
	temperature: "temperature",
	oxygen_level: "oxygen_level",
	heartbeat: "heartbeat",
	respiratory_rate: "respiratory_rate"
}

module.exports.getDonnes = (patientID, fromTimeStamp, toTimeStamp) => {
	return new Promise((resolve, reject) => {
		let sql = `SELECT * FROM donnees WHERE id  = ? and temps BETWEEN ? AND ? ORDER BY temps`;

		db.all(sql, [patientID, fromTimeStamp, toTimeStamp], (err, rows) => {
			if (err) {
				return reject(err)
			}
			let result = {}
			for (let row of rows) {
				if(!result[row.type]) {
					result[row.type] = []
				}
				result[row.type].push(row)
			}
			resolve(result)
		});
	})
}