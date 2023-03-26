//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React, { useState } from "react";
import Navbar from './Navbar'
import axios from 'axios';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Reg() {
    const [pname, setPatientName] = useState("");
    const [pemail, setPatientEmail] = useState("");
    const [pmobile, setPatientmobile] = useState("");
    const [pdob, setPatientDOB] = useState("");
    const [ppass, setPatientPass] = useState("");
    const [pgender, setPatientGender] = useState("");
    const [pcountry, setPatientCountry] = useState("");
    const [paddress, setPatientAddress] = useState("");
    const [msg, setMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${pname}`);
        console.log(`EMAIL: ${pemail}`);

        //CREATE JSON AND STORE ALL USER INPUT
        const patientobj = {
            patientname: pname,
           patientemail: pemail,
           patientmobile: pmobile,
           patientdob: pdob,
           patientpass: ppass,
           patientgender: pgender,
           patientcountry: pcountry,
           patientaddress: paddress
        }

        //COMMUNICATE WITH BACKEND USING REST API
        axios.post('http://localhost:5000/user/userreg', patientobj)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL')

                //TO CLEAR DATA
                setPatientName('')
                setPatientEmail('')
                setPatientmobile('')
                setPatientDOB('')
                setPatientPass('')
                setPatientGender('')
                setPatientCountry('')
                setPatientAddress('')
            });
    }
    return (
       
            <div>
            <Navbar />
         
            <div class="container">
            <br />
            <h3  style={{ color: "blue" }}><b>REGISTRATION FORM</b></h3>
            <h4 style={{ color: "purple" }}> {msg}</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={pname}
                    onChange={(e) => setPatientName(e.target.value)} placeholder="Enter Name"
                    required />
                <br /><br />

                <input type="email" value={pemail}
                    onChange={(e) => setPatientEmail(e.target.value)} placeholder="Enter Email"
                    required />
                <br /><br />

                <input type="number" value={pmobile}
                    onChange={(e) => setPatientmobile(e.target.value)} placeholder="Enter Mobile No"
                    required />
                <br /><br />

                <input type="date" value={pdob}
                    onChange={(e) => setPatientDOB(e.target.value)} />
                <br /><br />

                <input type="password" value={ppass}
                    onChange={(e) => setPatientPass(e.target.value)} placeholder="Enter Password"
                    required />
                <br /><br />

                <input type="radio" name="gender" value="MALE"
                    checked={pgender === 'MALE'}
                    onChange={(e) => setPatientGender(e.target.value)} />
                <label style={{ color: "black" }}>Male</label>

                <input type="radio" name="gender" value="FEMALE"
                    checked={pgender === 'FEMALE'}
                    onChange={(e) => setPatientGender(e.target.value)} />
                <label style={{ color: "black" }}>Female</label>
                <br /><br />

                <select value={pcountry} onChange={(e) => setPatientCountry(e.target.value)}>
                <option value="SELECT COUNTRY">SELECT COUNTRY</option>
                    <option value="RAJASTHAN">Rajasthan</option>
                    <option value="HARYANA">Haryana</option>
                    <option value="BIHAR">Bihar</option>
                    <option value="TAMILNADU">Tamilnadu</option>
                    <option value="UTTARPRADESH">Uttarpradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">"Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    
                    <option value="Maharashtra">Maharashtra</option>
            
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                     <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="West Bengal">West Bengal</option>
                    

                    
                    
                    
                </select>
                <br /><br />
                  


                <label style={{ color: "black" }}>ADDRESS: </label> <br />
                <textarea value={paddress}
                    onChange={(e) => setPatientAddress(e.target.value)} rows="3" >
                </textarea>
                <br /><br />
                
                <input type="submit" class="btn btn-primary" value="REGISTER" />

            </form>
        </div>
        </div>
    )
}

//STEP 3 -- EXPORT IT TO USE IT
export default Reg