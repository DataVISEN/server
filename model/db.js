let sqlite3 = require('sqlite3').verbose()

let db = null

module.exports.getDB = () => {
	return db
}

module.exports.initDB = () => {
	db = new sqlite3.Database(__dirname + "/../db.db", (err) => {
		if (err) {
			console.error(err.message)
		}
		else{
			console.log('Connected to the server database.')
		}
	})
}
