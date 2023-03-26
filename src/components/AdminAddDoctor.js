//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React, { useState } from "react";
import Navbar from './Navbar'
import axios from 'axios';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminAdddoctor() {
    const [dname, setDoctorName] = useState("");
    const [demail, setDoctorEmail] = useState("");
    const [dmobile, setDoctormobile] = useState("");
    const [dgender, setDoctorGender] = useState("");
    const [dfees, setDoctorFees] = useState("");
    const [dqualification, setDoctorQualification] = useState("");
    const [ddoctorspecialization, setDoctorspecialization] = useState("");
    const [ddoctorexperience, setDoctorExperience] = useState("");
    
    const [msg, setMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${dname}`);
        console.log(`EMAIL: ${demail}`);

        //CREATE JSON AND STORE ALL USER INPUT
        const Doctorobj = {
            doctorname: dname,
            doctoremail:demail,
            doctormobile: dmobile,
            doctorgender: dgender,
            doctorspecialization:ddoctorspecialization,
            doctorfees: dfees,
            doctorqualification:dqualification,
            doctorexperience:ddoctorexperience
            
        }

        //COMMUNICATE WITH BACKEND USING REST API
        axios.post('http://localhost:5000/admin/doctorreg', Doctorobj)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL')

                //TO CLEAR DATA
                setDoctorName('')
                setDoctorEmail('')
                setDoctormobile('')
                setDoctorGender('')
                setDoctorspecialization('')
                setDoctorQualification('')
                setDoctorFees('')
                setDoctorExperience('')

            });
    }
    return (
        <div>
            <Navbar />
            <br />
            <h3 style={{ color: "blue",fontWeight:"bold" }}>DOCTOR REGISTRATION FORM</h3>
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={dname}
                    onChange={(e) => setDoctorName(e.target.value)} placeholder="Enter Name"              
                    required />
                <br /><br />

                <input type="email" value={demail}
                    onChange={(e) => setDoctorEmail(e.target.value)} placeholder="Enter Email"
                    required />
                <br /><br />

                <input type="number" value={dmobile}
                    onChange={(e) => setDoctormobile(e.target.value)} placeholder="Enter Mobile No"
                    required />
                <br /><br />

                <input type="radio" name="gender" value="MALE"
                    checked={dgender === 'MALE'}
                    onChange={(e) => setDoctorGender(e.target.value)} />
                <label>Male</label>

                <input type="radio" name="gender" value="FEMALE"
                    checked={dgender === 'FEMALE'}
                    onChange={(e) => setDoctorGender(e.target.value)} />
                <label>Female</label>
                <br /><br />

                <label> DOCTOR SPECIALIZATION</label> <br />
                <textarea value={ddoctorspecialization}
                    onChange={(e) => setDoctorspecialization(e.target.value)} rows="3" >
                </textarea>
                <br />
                <label> DOCTOR QUALIFICATION</label> <br />
                <select value={dqualification} onChange={(e) => setDoctorQualification(e.target.value)}>
                     <option value="CHOOSE DOCTOR QUALIFICATION">CHOOSE DOCTOR QUALIFICATION</option>
                    <option value="Bachelor of Medicine,Bachelor of Surgery">Bachelor of Medicine,Bachelor of Surgery</option>
                    <option value="Bachelor of Dental Surgery">Bachelor of Dental Surgery</option>
                    <option value="Bachelor of Ayurvedic Medicine and Surgery">Bachelor of Ayurvedic Medicine and Surgery</option>
                    <option value="Bachelor of Unani Medicine and Surgery">Bachelor of Unani Medicine and Surgery</option>
                    <option value="Bachelor of Homeopathy Medicine and Surgery">Bachelor of Homeopathy Medicine and Surgery</option>
                    <option value="Bachelor of Yoga and Naturopathy Sciences">Bachelor of Yoga and Naturopathy Sciences</option>
                    <option value="Bachelor of Veterinary Sciences and Animal Husbandry">Bachelor of Veterinary Sciences and Animal Husbandry</option>
                    <option value="Doctor of Medicine">Doctor of Medicine</option>
                    <option value="Master of Surgery">Master of Surgery </option>
                    <option value="Diplomate of National Board"> Diplomate of National Board </option>
                    <option value="Doctorate of Medicine"> Doctorate of Medicine </option>
                    <option value="Master of Chirurgiae "> Master of Chirurgiae </option>
                </select>
                <br /><br />
                <input type="number" value={dfees}
                    onChange={(e) => setDoctorFees(e.target.value)} placeholder="Enter Fees Amount"
                    required />
                <br /><br />
                <input type="text" value={ddoctorexperience}
                    onChange={(e) => setDoctorExperience(e.target.value)} placeholder="Enter years of experience"
                    required />
                <br /><br />

                <input type="submit"  className="btn btn-primary" value="REGISTER" />

            </form>
        </div>
    )
}

//STEP 3 -- EXPORT IT TO USE IT
export default AdminAdddoctor