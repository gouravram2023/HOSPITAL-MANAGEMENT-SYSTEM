// IMPORT EXPRESS SERVER
const express = require('express');

//IMPORT PATIENT MODEL AND BIND IT
const PatientModel = require('../models/patientinfo');
//IMPORT DOCTOR MODEL AND BIND IT
const DoctorModel = require('../models/doctorinfo');
//IMPORT USER MODEL AND BIND IT
const UserModel = require('../models/userinfo');

// USE Router FOR EXPRESS SERVER
const router = express.Router();
// INSERT RECORD/Document
router.post('/doctorreg', (req, res) => {
    //Create Object of Doctor Model Class
    // And Receive value from request body and Store value within the Object
    const doctorobj = new DoctorModel({
        doctorname: req.body.doctorname,
        doctoremail: req.body.doctoremail,
        doctormobile: req.body.doctormobile,
        doctorgender: req.body.doctorgender,
        doctorspecialization: req.body.doctorspecialization,
        doctorqualification: req.body.doctorqualification,
        doctorfees: req.body.doctorfees,
        doctorexperience: req.body.doctorexperience,
    });//CLOSE DoctorModel
    //INSERT/SAVE THE RECORD/DOCUMENT
   doctorobj.save()
   .then(inserteddocument => {
       res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);

   })//CLOSE THEN
   .catch(err => {
       res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
       process.exit();
   });

res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});


router.get('/viewalluser', (req, res) => {
    PatientModel.find({})
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            res.status(200).send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.patientid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD
router.get('/viewalldoctor', (req, res) => {
    DoctorModel.find({})
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            res.status(200).send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.doctorid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD
router.get('/viewallappointment', (req, res) => {
   UserModel.find({})
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            res.status(200).send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.userid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD
router.get('/searchdoctor/:did', (req, res) => {
    DoctorModel.find({ "doctorname": req.params.did })
         .then(getsearchdocument => {
             if (getsearchdocument.length > 0) {
                 res.status(200).send(getsearchdocument);
             }
             else {
                 res.status(404).send({ message: "Note not found with id " + req.params.doctorid });
             }
         }) //CLOSE THEN
         .catch(err => {
             res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.doctorid });
         })//CLOSE CATCH
 }//CLOSE CALLBACK FUNCTION BODY
 );//CLOSE GET METHOD
// DELETE RECORD/Document
router.delete('/deldoctor/:did', (req, res) => {
   DoctorModel.findOneAndRemove({ "doctoremail": req.params.did })
         .then(deleteddocument => {
             if (deleteddocument != null) {
                 res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
             }
             else {
                 res.status(404).send('INVALID DOCTOR ID ' + req.params.doctorid);
             }
         }) //CLOSE THEN
         .catch(err => {
             return res.status(500).send({ message: "DB Problem..Error in Delete with id " + req.params.doctorid });
         })//CLOSE CATCH
 }//CLOSE CALLBACK FUNCTION BODY
 ); //CLOSE Delete METHOD
 


router.get('/searchuser/:pid', (req, res) => {
   PatientModel.find({ "patientemail": req.params.pid })
        .then(getsearchdocument => {
            if (getsearchdocument.length > 0) {
                res.status(200).send(getsearchdocument);
            }
            else {
                res.status(404).send({ message: "Note not found with id " + req.params.patientid });
            }
        }) //CLOSE THEN
        .catch(err => {
            res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.patientid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD
// DELETE RECORD/Document
router.delete('/deluser/:pid', (req, res) => {
   PatientModel.findOneAndRemove({ "patientemail": req.params.pid })
        .then(deleteddocument => {
            if (deleteddocument != null) {
                res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }
            else {
                res.status(404).send('INVALID PATIENT ID ' + req.params.patientid);
            }
        }) //CLOSE THEN
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in Delete with id " + req.params.patientid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
); //CLOSE Delete METHOD


//SHOULD BE EXPORTED
module.exports = router;