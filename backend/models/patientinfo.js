const schema_mongoose = require('mongoose');

const PatientDetails = schema_mongoose.Schema(
   {
      patientname: { type: String },
      patientemail: { type: String },
      patientmobile: { type: String },
      patientdob: { type: String },
      patientpass: { type: String },
      patientgender: { type: String },
      patientcountry: { type: String },
      patientaddress: { type: String },
   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('patientcollection', PatientDetails);