import Footer from "./Footer";
import page from '../assets/page.png';
import imagefa from '../assets/facebook.png';
import logo from '../assets/logo.png';
import instag from '../assets/insta.jpeg';
import googl from '../assets/google.png';



const Login = () => ( <
    div >
    <
    div >
    <
    img src = { logo }
    alt = "Logo"
    className = "logo-main" / >

    <
    /div> <
    div className = "frontpage" >
    <
    img src = { page }
    alt = "page"

    className = "frontpageimg" /
    >

    <
    div >
    <
    form className = "containerlogin login-main" >
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
    label > Remember me < /label> <
    input name = "checkbox"
    type = "checkbox"
    defaultValue = "remember me" / > <
    br / >
    <
    button type = "submit"
    className = "loginbtn" > Login < /button>  <
    br / >
    <
    div class = "forgotdiv" >

    <
    span class = "psw" > < a href = "#" > Forgot password ? < /a></span >
    <
    /div> 


    <
    /
    div >
    <
    hr / >
    <
    h5 > or Sign up with < /h5> <
    div className = "iconlinks" >
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
    div >
    <
    div class = "forgotdiv" >

    <
    span class = "psw" > < a href = "#" > don 't have account?create one < /a></span > <
    /div>  {
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
    /div> < /
    div >

);
export default Login;