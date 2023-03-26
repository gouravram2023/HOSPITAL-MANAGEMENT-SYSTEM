// IMPORT EXPRESS SERVER
const express = require('express');

//IMPORT PATIENT MODEL AND BIND IT
const PatientModel = require('../models/patientinfo');

const AppointmentModel = require('../models/userinfo');
// USE Router FOR EXPRESS SERVER
const router = express.Router();

// INSERT RECORD/Document
router.post('/userreg', (req, res) => {
    //Create Object of Patient Model Class
    // And Receive value from request body and Store value within the Object
    const patientobj = new PatientModel({
        patientname: req.body.patientname,
        patientemail: req.body.patientemail,
        patientmobile: req.body.patientmobile,
        patientdob: req.body.patientdob,
        patientpass: req.body.patientpass,
        patientgender: req.body.patientgender,
        patientcountry: req.body.patientcountry,
        patientaddress: req.body.patientaddress,
    });//CLOSE PatientModel

    //INSERT/SAVE THE RECORD/DOCUMENT
   patientobj.save()
        .then(inserteddocument => {
            res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);

        })//CLOSE THEN
        .catch(err => {
            res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
            process.exit();
        });

    res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});
// INSERT RECORD/Document
router.post('/userappointment', (req, res) => {
    //Create Object of Appointment Model Class
    // And Receive value from request body and Store value within the Object
    const userobj = new AppointmentModel({
        username: req.body.username,
       doctorname:req.body.doctorname,
       userappointment: req.body.userappointment,
    });//CLOSE AppointmentModel

    //INSERT/SAVE THE RECORD/DOCUMENT
  userobj.save()
        .then(inserteddocument => {
            res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);

        })//CLOSE THEN
        .catch(err => {
            res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
            process.exit();
        });

    res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});

router.post('/userlogin', (req, res) => {
    //console.log(req.body.loginemail)
    //console.log(req.body.emppass)
    PatientModel.find({ "patientemail": req.body.loginemail, "patientpass": req.body.loginpass })
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            if (getsearchdocument.length > 0) {
                res.status(200).send(getsearchdocument)
            }
            else {
                res.status(404).send({ message: "NOT MATCHED" })
            }
        }) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.patientid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
)//CLOSE POST METHOD 







// UPDATE RECORD/Document
router.put('/update', (req, res) => {
    res.send('<h2>INSIDE PUT METHOD..THIS IS UPDATE API..</h2>');
});


//SHOULD BE EXPORTED
module.exports = router;