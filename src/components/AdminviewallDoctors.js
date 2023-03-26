//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from "react";
import Navbar from './Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminviewallDoctors() {
    const [doctorlist, setDoctorList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/viewalldoctor')
            .then(response => {
                console.log(response.data)
                setDoctorList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

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

    return (
        <div align="center">
            <Navbar />

            <h3>ALL DOCTOR DETAILS</h3>

            <table class="table table-striped-columns" >
                <thead >
                    <tr >
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
        </div>)
}

//STEP 3 -- EXPORT IT TO USE IT
export default AdminviewallDoctors