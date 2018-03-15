let donnees = require('../model/donnees')

module.exports.fakePatient = {
	"name": "Bob",
	"surname": "Léponge",
	"birth": 719664630000,
	"gender": "M"
}

let fakeDonnees = {}
for( let valueType in donnees.VALUE_TYPES ) {
	fakeDonnees[donnees.VALUE_TYPES[valueType]] = [
		{
			time:1521043765000,
			value: 36
		},
		{
			time:1521053765000,
			value: 40
		},
		{
			time:1521063765000,
			value: 37
		},
		{
			time:1521073765000,
			value: 45
		}
	]
}
module.exports.fakeDonnees = fakeDonnees