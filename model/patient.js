let fakeDatas = require('./fakeDatas')

module.exports.getPatient = (patientID) => {
	return fakeDatas.fakePatient
}