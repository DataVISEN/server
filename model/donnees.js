let fakeDatas = require('./fakeDatas')

module.exports.VALUE_TYPES = {
	arterial_pressure_dia: "arterial_pressure_dia",
	arterial_pressure_sys: "arterial_pressure_sys",
	temperature: "temperature",
	oxygen_level: "oxygen_level",
	heartbeat: "heartbeat",
	respiratory_rate: "respiratory_rate"
}

module.exports.getDonnes = (patientId, fromTimeStamp, toTimeStamp) => {
	return fakeDatas.fakeDonnees
}