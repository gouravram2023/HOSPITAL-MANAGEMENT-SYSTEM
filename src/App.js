import './App.css';
 //import "./navbar.css";
//import Navbar from './components/Navbar'
import Home from './components/Home'
import Reg from './components/Reg'
import Login from './components/Login'
import Logout from './components/Logout'
import Contactus from './components/Contactus'
import Adminlogin from './components/Adminlogin';
import Adminafterlogin from './components/Adminafterlogin'
import Adminviewall from './components/Adminviewall';
import AdminviewallDoctors from './components/AdminviewallDoctors';
import Adminsearchuser from './components/Adminsearchuser';
import AdminDeleteUser from './components/AdminDeleteUser';
import AdminManageUser from './components/AdminManageUser';
import Adminsearchdoctor from './components/Adminsearchdoctor';
import AdminAddDoctor from './components/AdminAddDoctor';
import AdminDeleteDoctor from './components/AdminDeleteDoctor';
import Adminlogout from './components/Adminlogout';
import Userafterlogin from './components/Userafterlogin';
import UserAppointmentBooking from './components/UserAppointmentBooking';
import AdminviewallAppointment from './components/AdminviewallAppointment';
import Aboutus from './components/Aboutus';
import Billing from './components/Billing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div align="center" >
      <h1 className="hospital-heading"> Hospital Health Care</h1>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/userreg' element={<Reg />} />
          <Route path='/userlogin' element={<Login />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/adminlogin' element={<Adminlogin />} />
          <Route path='/adminafterlogin' element={<Adminafterlogin />} />
          <Route path='/adminviewall' element={<Adminviewall />} />
          <Route path='/adminviewalldoctors' element={<AdminviewallDoctors />} />
          <Route path='/adminviewallappointment' element={<AdminviewallAppointment />} />
          <Route path='/adminsearchuser' element={<Adminsearchuser />} />
          <Route path='/admindeleteuser' element={<AdminDeleteUser />} />
          <Route path='/adminmanageuser' element={<AdminManageUser />} />
          <Route path='/adminadddoctor' element={<AdminAddDoctor />} />
          <Route path='/admindeletedoctor' element={<AdminDeleteDoctor />} />
          <Route path='/adminsearchdoctor' element={<Adminsearchdoctor />} />
          <Route path='/adminlogout' element={<Adminlogout />} />
          <Route path='/userafterlogin' element={<Userafterlogin />} />
          <Route path='/userlogout' element={<Logout />} />
          <Route path='/userappointmentbooking' element={<UserAppointmentBooking />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/billing' element={<Billing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;