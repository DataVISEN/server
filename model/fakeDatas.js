let donnees = require('../model/donnees')

module.exports.fakePatient = {
	"name": "Bob",
	"surname": "Léponge",
	"birth": 719664630,
	"gender": "M"
}

let fakeDonnees = {}
for( let valueType in donnees.VALUE_TYPES ) {
	fakeDonnees[donnees.VALUE_TYPES[valueType]] = [
		{
			time:1521043765,
			value: 36
		},
		{
			time:1521053765,
			value: 36
		},
		{
			time:1521063765,
			value: 36
		},
		{
			time:1521073765,
			value: 36
		}
	]
}
module.exports.fakeDonnees = fakeDonnees