import React from 'react'
import "./Login.css"
import SRMLOGO from "./../IMG/srmLogo.jfif";
import AppLogo from "./../IMG/AppLogo.png";
import { Link } from "react-router-dom";


function Login() {
    return (
        <div className='Login'>
            <div className='Main'>
                <div className='Head'>
                    <div className="left">
                        <img src={SRMLOGO} className="Logo" alt="SRM LOGO" />
                    </div>
                    <div className="right">
                        <img src={AppLogo} className="AppLogo" alt="Applogo" />
                    </div>
                </div>
                <h2>Academia - Student Portal</h2>

                <form>
                    <div className='content'>
                        <h4>Sign In</h4>
                        <label htmlFor="Email">Email Address</label>
                        <input type="text" placeholder="Email Address" name="username" id="Email" />

                        <label htmlFor="Password">Password</label>
                        <input type="password" placeholder="Password" name="password" id="Password" />
                        <Link class="btn" to="/Main" >Sign In</Link>
                    </div>
                    <a href="/">Forgot Password?</a>
                </form>
            </div>
        </div>
    )
}

export default Login