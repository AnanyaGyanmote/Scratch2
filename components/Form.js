import imagefa from '../assets/facebook.png';
import logo from '../assets/logo.png';
import instag from '../assets/insta.jpeg';
import googl from '../assets/google.png';

import Footer from "./Footer";



const Form = () => ( <
    div >

    <
    div >
    <
    form className = "container-form" >
    <
    div className = "logocontainer" >
    <
    img src = { logo }
    alt = "Logo"
    className = "logo" / >
    <
    /div> <
    div >
    <
    input type = "text"
    placeholder = "full name"
    name = "uname"
    required / > < br / >
    <
    input type = "date"
    placeholder = "Date of Birth"
    name = "dob"

    required / >
    <
    div className = "gender" >
    <
    input type = "radio"
    name = "gender"
    defaultValue = "male" / > Male <
    input type = "radio"
    name = "gender"
    defaultValue = "female" / > Female <
    /div> <
    input type = "email"
    placeholder = "email"
    name = "email"
    required / >
    <
    input type = "password"
    placeholder = "Password"
    name = "psw"
    required / >
    <
    br / >
    <
    button type = "submit"
    className = "loginbtn" > Login < /button> 

    <
    button type = "reset"
    className = "cancle-btn" > Cancel < /button> <
    br / >
    <
    input name = "checkbox"
    type = "checkbox"
    defaultValue = "remember me" / > < label > Remember me < /label> < /
    div > <
    hr / >
    <
    h5 > or Sign up with < /h5> <
    div >
    <
    a href = "https//instagrame.com" >
    <
    img src = { instag }
    alt = "insta"
    width = "10%" / >
    <
    /a> <
    a href = "https//facebook.com" >
    <
    img src = { imagefa }
    alt = "facebook"
    width = "10%" / >
    <
    /a> <
    a href = "https//google.com" >
    <
    img src = { googl }
    alt = "google"
    width = "12%" / >
    <
    /a> < /
    div > {
        /* <br>
                      <div class="forgotdiv">

                          <span class="psw"> <a href="#">Forgot password?</a></span>
                      </div> */
    } <
    /form> < /
    div >
    <
    Footer / >
    <
    /div>


);
export default Form;