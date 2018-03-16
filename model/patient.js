let fakeDatas = require('./fakeDatas')
let db = require('./db')

module.exports.getPatient = (patientID) => {
	return new Promise((resolve, reject) => {
		let sql = `SELECT * FROM patient WHERE id  = ?`;

		db.getDB().get(sql, [patientID], (err, row) => {
			if (err) {
				return reject(err)
			}
			if(!row) {
				row = null
			}
			resolve(row)
		});
	})
}