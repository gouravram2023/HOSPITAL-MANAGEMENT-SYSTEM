//STEP 1 -- IMPORT REACT
import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminsearchdoctor() {

    const [dname, setDoctorName] = useState("");
    const [msg, setMessage] = useState("");
    const [doctorlist, setDoctorList] = useState([]);
    const [status, setStatus] = useState(false);

    function viewDoctorList() {
        return doctorlist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow.doctorname}</td>
                    <td>{currentrow.doctoremail}</td>
                    <td>{currentrow.doctormobile}</td>
                    <td>{currentrow.doctorgender}</td>
                    <td>{currentrow.doctorspecialization}</td>
                    <td>{currentrow.doctorqualification}</td>
                    <td>{currentrow.doctorfees}</td>
                    <td>{currentrow.doctorexperience}</td>
                </tr>
            );
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.get('http://localhost:5000/admin/searchdoctor/' +dname)
            .then(res => {
                console.log(res.data)
                setDoctorList(res.data)
                setStatus(true)
                setMessage('')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID NAME')
                setStatus(false)
            })

        setDoctorName('')
    }

    if (status === false) {
        return (
            <>
                <Navbar />
                <br />
                <h3 style={{ color: 'brown' }}>ENTER DOCTOR NAME FOR SEARCH</h3>
                <b style={{ color: "red" }}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={dname}
                        onChange={(e) => setDoctorName(e.target.value)}
                        placeholder="DOCTOR NAME"
                        required />
                    <br />
                    <br />
                    <input type="submit" value="SEARCH DOCTOR" className="btn btn-success" />
                </form>
            </>)
    }
    else {
        return (
            <>
                <Navbar />
                <br />
                <h3 style={{ color: 'brown' }}>ENTER DOCTOR NAME  FOR SEARCH</h3>
                <b style={{ color: "red" }}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={dname}
                        onChange={(e) => setDoctorName(e.target.value)}
                        placeholder="DOCTOR NAME"
                        required />
                    <br />
                    <br />
                    <input type="submit" value="SEARCH DOCTOR" className="btn btn-success" />
                </form>
                <br />
                <div>

                    <h3 style={{ color: 'blue' }}>ALL DOCTOR DETAILS</h3>

                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Gender</th>
                                <th>Doctor Specialization</th>
                                <th>Doctor Qualification</th>
                                <th>Doctor Fees</th>
                                <th>Doctor Experience</th>
                            </tr>
                        </thead>

                        <tbody>
                            {viewDoctorList()}
                        </tbody>
                    </table>
                </div>
            </>)
    }

}


//STEP 3 -- EXPORT IT TO USE IT
export default Adminsearchdoctor