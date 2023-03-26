//STEP 1 -- IMPORT REACT
import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminDeleteUser() {

    const [msg, setMessage] = useState("");
    const [pemail, setPatientEmail] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //console.log(`Form submitted:`);
        //console.log(`EMAIL ID: ${eemail}`);

        axios.delete('http://localhost:5000/admin/deluser/' + pemail)
            .then(res => {
                console.log(res.data)
                setMessage('PATIENT SUCCESSFULLY DELETED')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID EMAIL ID')
            })

        setPatientEmail('')
    }

    return (
        <>
            <Navbar />
            <br />
            <h3 style={{ color: 'brown' }}>ENTER EMAIL ID FOR DELETE</h3>
            <b style={{ color: "red" }}>{msg}</b>
            <form onSubmit={handleSubmit}>
                <input type="email" value={pemail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    placeholder="EMAIL ID"
                    required />
                <br />
                <br />
                <input type="submit" value="DELETE PATIENT" className="btn btn-danger" />
            </form>
        </>)
}


//STEP 3 -- EXPORT IT TO USE IT
export default AdminDeleteUser