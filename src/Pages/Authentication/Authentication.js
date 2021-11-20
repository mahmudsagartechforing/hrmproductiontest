import { useLocation } from "react-router";
import Login from "./Login/Login";
import { NavLink } from "react-router-dom";
import Register from "./Register/Register";

import logo from "../../images/logo.png"
import './authentication.css'

const Authentication = () => {
    const location = useLocation();

    return (
        <main className="mainAuthcontainer">
            <div className="auth-row">
                <div className="auth-container">
                    <div className="auth-links">
                        <NavLink
                        to='/login' 
                        >Sign In</NavLink>
                        <NavLink to='/register' >Sign Up </NavLink>
                    </div>
                    <div className="auth-form">
                    {(location.pathname === "/login") ? <Login /> : (location.pathname === "/register") && <Register />}
                    </div>
                </div>
                <div className="auth-detail">
                    <div className="auth-detail_img">
                        <img src={logo} alt="techforing" />
                        <i>Shaping Tomorrow’s Cybersecurity</i>
                    </div>
                    <div className="auth-detail_text">
                    <h1>Welcome to TechForing</h1>
                    <p className="auth-detail_notice">
                        <span>Notice: </span><br />
                        <strong>An applicant can register only once.</strong><br />
                        Registered applicant, please login with your credentials
                        by entering email and password
                    </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Authentication;
