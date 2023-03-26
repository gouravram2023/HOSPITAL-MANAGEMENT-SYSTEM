const schema_mongoose = require('mongoose');

const AppointmentDetails = schema_mongoose.Schema(
   {
      username: { type: String },
     doctorname: { type: String },
    userappointment: { type: String },
   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('appointmentcollection',  AppointmentDetails);