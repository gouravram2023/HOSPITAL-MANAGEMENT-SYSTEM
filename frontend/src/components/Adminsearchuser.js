//STEP 1 -- IMPORT REACT
import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminsearchuser() {

    const [pemail, setPatientEmail] = useState("");
    const [msg, setMessage] = useState("");
    const [patientlist, setPatientList] = useState([]);
    const [status, setStatus] = useState(false);

    function viewPatientList() {
        return patientlist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow.patientname}</td>
                    <td>{currentrow.patientemail}</td>
                    <td>{currentrow.patientmobile}</td>
                    <td>{currentrow.patientdob}</td>
                    <td>{currentrow.patientgender}</td>
                    <td>{currentrow.patientcountry}</td>
                    <td>{currentrow.patientaddress}</td>
                </tr>
            );
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.get('http://localhost:5000/admin/searchuser/' +pemail)
            .then(res => {
                console.log(res.data)
                setPatientList(res.data)
                setStatus(true)
                setMessage('')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID EMAIL ID')
                setStatus(false)
            })

        setPatientEmail('')
    }

    if (status === false) {
        return (
            <>
                <Navbar />
                <br />
                <h3 style={{ color: 'brown' }}>ENTER EMAIL ID FOR SEARCH</h3>
                <b style={{ color: "red" }}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={pemail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        placeholder="EMAIL ID"
                        required />
                    <br />
                    <br />
                    <input type="submit" value="SEARCH PATIENT" className="btn btn-success" />
                </form>
            </>)
    }
    else {
        return (
            <>
                <Navbar />
                <br />
                <h3 style={{ color: 'brown' }}>ENTER EMAIL ID FOR SEARCH</h3>
                <b style={{ color: "red" }}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={pemail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        placeholder="EMAIL ID"
                        required />
                    <br />
                    <br />
                    <input type="submit" value="SEARCH PATIENT" className="btn btn-success" />
                </form>
                <br />
                <div>

                    <h3 style={{ color: 'blue' }}>ALL PATIENT DETAILS</h3>

                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Country</th>
                                <th>Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            {viewPatientList()}
                        </tbody>
                    </table>
                </div>
            </>)
    }

}


//STEP 3 -- EXPORT IT TO USE IT
export default Adminsearchuser