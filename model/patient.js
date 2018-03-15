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

module.exports.getPatient = (patientID) => {
	return new Promise((resolve, reject) => {
		let sql = `SELECT * FROM patient WHERE id  = ?`;

		db.get(sql, [patientID], (err, row) => {
			if (err) {
				return reject(err)
			}
			resolve(row)
		});
	})
}