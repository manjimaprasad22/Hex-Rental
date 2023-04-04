import logo from './logo.svg';
import './Assets/style/style.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ListOfCar from './Components/ListOfCar';
import Homepage from './Pages/Homepage';
import SearchCarBox from './Components/SearchCarBox';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import ListingPage from './Pages/ListingPage';
import Login from './Pages/User/Login';
import Register from './Pages/User/Register';
import ForgotPassword from './Pages/User/ForgotPassword';
import OtpVerification from './Pages/User/OtpVerification';
import OtpVerifyForgot from './Pages/User/OtpVerifyForgot';
import ResetPassword from './Pages/User/ResetPassword';
import DetailPage from './Pages/DetailPage/DetailPage';
import ProfilePage from './Pages/User/ProfilePage';
import BookingConfirm from './Pages/DetailPage/BookingConfirm';
import ChangePassword from './Pages/User/ChangePassword';
import Feedbackform from './Pages/User/Feedbackform';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/carlisting' element={<ListingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
        <Route path='/verifyOTP' element={<OtpVerification/>}></Route>
        <Route path='/verifyOtpForget' element={<OtpVerifyForgot/>}></Route>
        <Route path='/resetpassword' element={<ResetPassword/>}></Route>
        <Route path='/detailpage' element={<DetailPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/confirmbooking' element={<BookingConfirm/>}></Route>
        <Route path='/changepassword' element={<ChangePassword/>}></Route>
        <Route path='/feedback' element={<Feedbackform/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
