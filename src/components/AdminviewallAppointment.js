//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from "react";
import Navbar from './Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminviewallAppointment() {
    const [appointmentlist, setAppointmentList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/viewallappointment')
            .then(response => {
                console.log(response.data)
                setAppointmentList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewAppointmentList() {
        return appointmentlist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow.username}</td>
                    <td>{currentrow.doctorname}</td>
                    <td>{currentrow.userappointment}</td>
                </tr>
            );
        });
    }

    return (
        <div align="center">
            <Navbar />

            <h3>ALL PATIENT APPOINMENT DETAILS</h3>

            <table  class="table table-dark table-striped">
                <thead >
                    <tr>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Doctor Appointment</th>
                    </tr>
                </thead>

                <tbody>
                    {viewAppointmentList()}
                </tbody>
            </table>
        </div>)
}

//STEP 3 -- EXPORT IT TO USE IT
export default AdminviewallAppointment