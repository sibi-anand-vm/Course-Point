import React, { useState } from 'react';
import './OLPLanding.css';
import Signup from './OLPSignup.js';
import Landing from './OLPLanding.js';
const Login = () => {
    const [isSignupVisible, setSignupVisible] = useState(false);
    const [isLandingVisible, setLandingVisible] = useState(false);

    const Loginbuttonclick = () => {
        // Update the state to navigate to Landing component
        setLandingVisible(true);
    };

    if (isLandingVisible) {
        return <Landing />;
    }

    const signupButtonClick = () => {
        setSignupVisible(true);
    };

    if (isSignupVisible) {
        return <Signup />;
    }

    return (
        <>
            <header>
                <h1>Course Point</h1>
            </header>
            <div className="main-container">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        {isSignupVisible ? (
                            <Signup />
                        ) : (
                            <form action="#">
                                <h1>Login</h1>
                                <input type="email" id='umail' placeholder="Email" />
                                <input type="password" id='upass' placeholder="Password" />
                                <button onClick={Loginbuttonclick}>Login</button>
                            </form>
                        )}
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>To keep connected with us, please login with your personal info</p>
                                <p>Instead, create a new account</p>
                                <button className="ghost" onClick={signupButtonClick} id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
