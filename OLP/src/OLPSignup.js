import React, { useState } from 'react';
import Login from './OLPLogin.js';
import './OLPLogin.css';
import CreateUser from './server/models/signup.js';

const Signup = () => {
    const [isLoginVisible, setLoginVisible] = useState(false);

    const cons= async () => {
        const username = document.getElementById('uname').value;
        const email = document.getElementById('umail').value;
        const password = document.getElementById('upass').value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(email);

        const isPasswordValid = password.length > 8;

        if (username === '' || email === '' || password === '') {
            alert('Please Enter all Credentials');
            return;
        }

        if (!isEmailValid) {
            alert('Please enter a valid email address');
            return;
        }

        if (!isPasswordValid) {
            alert('Password must be at least 8 characters long');
            return;
        }
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: username, mail: email, password })
            });
            if (response.ok) {
                // User created successfully
                setLoginVisible(true);
            } else {
                // Error creating user
                const errorMessage = await response.text();
                alert('Error creating user: ' + errorMessage);
            }
        } catch (error) {
            console.error('Error creating user:', error);
            alert('Error creating user. Please try again.');
        }
        
    };

    const Log = () => setLoginVisible(true);

    if (isLoginVisible) {
        return <Login />;
    }
    return (
        <>         
 <header>
<h1>Course Point</h1>
            </header>
            <div className="main-container">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form onSubmit={cons} method='post'>
                            <h1>Create Account</h1>
                            <input type="text" id='uname' placeholder="Name" />
                            <input type="email" id='umail' placeholder="Email" />
                            <input type="password" id='upass' placeholder="Password" />
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start the journey with us by Sign Up</p>
                                <p>Already have an Account?</p>
                                <button className="ghost" id="signUp" onClick={() => Log()}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
