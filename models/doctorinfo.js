const schema_mongoose = require('mongoose');

const DoctorDetails = schema_mongoose.Schema(
   {
      doctorname: { type: String },
      doctoremail: { type: String },
      doctormobile: { type: String },
      doctorgender: { type: String },
      doctorspecialization: { type: String },
      doctorqualification: { type: String },
      doctorfees:{ type: String },
      doctorexperience:{ type: String },

   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('doctorcollection', DoctorDetails);