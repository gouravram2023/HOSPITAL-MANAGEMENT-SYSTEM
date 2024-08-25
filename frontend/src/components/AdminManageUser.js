//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminManageUser() {
    const [patientlist, setPatientList] = useState([]);
    const [msg, setMessage] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/admin/viewalluser')
            .then(response => {
                console.log(response.data)
                setPatientList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

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
                    <td>
                        <button onClick={() => removeRow(index)}>Delete</button>
                    </td>
                </tr>
            );
        });
    }

    function removeRow(index) {
        var temppatientlist = [...patientlist]; // make a new copy of array instead of mutating the same array directly. 
        let removerow = temppatientlist.splice(index, 1);
        console.log(removerow[0].patientemail)

        axios.delete('http://localhost:5000/admin/deluser/' + removerow[0].patientemail)
            .then(res => {
                console.log(res.data)
                setMessage('SUCCESSFULLY DELETED')
                setPatientList(temppatientlist)
            })
            .catch(err => {
                console.log(err)
                setMessage('PROBLEM....')
            })
    }

    return (
        <div className='container'>
            <Navbar />
            <br />
           <h3 style={{ color: "black" }}>ALL PATIENT DETAILS</h3>

           <b style={{ color: "red" }}>{msg}</b>

            <table border="1" class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Country</th>
                        <th>Address</th>
                        <th>Delete Data</th>
                    </tr>
                </thead>

                <tbody>
                    {viewPatientList()}
                </tbody>
            </table>
        </div>)
}


//STEP 3 -- EXPORT IT TO USE IT
export default AdminManageUser