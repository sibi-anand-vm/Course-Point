import React, { useState } from 'react';
import Python from './OLPPython';
import Html from './OLPHtml';
import Java from './OLPJava';
import DS from './OLPDS';
import Login from './OLPLogin.js';
import './OLPCourses.css';
const Landing = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isPythonVisible, setPythonVisible] = useState(false);
  const [ishtmlVisible, sethtmlVisible] = useState(false);
  const [isjavaVisible, setjavaVisible] = useState(false);
  const [isdsVisible, setdsVisible] = useState(false);
  const Pythoncr=()=>{
    setPythonVisible(true);
  }
  if (isPythonVisible) {
    return <Python/>;
}
const Htmlcr=()=>{
  sethtmlVisible(true);
}
if (ishtmlVisible) {
  return <Html/>;
}
const Javacr=()=>{
  setjavaVisible(true);
}
if (isjavaVisible) {
  return <Java/>;
}
const DScr=()=>{
  setdsVisible(true);
}
if (isdsVisible) {
  return <DS/>;
}
const Log = () => setLoginVisible(true);

    if (isLoginVisible) {
        return <Login />;
    }
  return (
    <>
      <div id='home' className='main'>
        <div className="con">
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#profile" onClick={Log}>LogOut</a></li>
            </ul>
          </nav>
          <h1>Welcome to Our Online Learning Platform</h1>
          <p>Expand your knowledge with our diverse range of courses</p>
        </div>
      </div>
      <div id='about' className="rabbit">
  <h1  className="mickey">About Our Online Learning Platform</h1>
  <h2 className="minnie">About</h2>
  <div className="caption daisy">
    <p>We believe in making learning fun and accessible for everyone.</p>
    <p>Join us on our journey to knowledge!</p>
  </div>
  <h2 className="bugs">Features of Our App</h2>
  <ul className="features">
    <li className="donald">Interactive lessons</li>
    <li className="goofy">Personalized learning paths</li>
    <li className="pluto">Engaging quizzes and assessments</li>
    <li className="daffy">Community forums for collaboration</li>
    <li className="porky">Progress tracking and analytics</li>
  </ul>
  <h2 className="tweety">Contact Details</h2>
  <ul className="contact-details">
    <li className="contact-info">Mobile:+91 9080672379,+91 8825453562</li>
    <li className="contact-info">Email: contact@cp.com</li>
    <li className="contact-info daffy">Twitter: @coursepoint</li>
  </ul>
  <img src="https://cdn7.dissolve.com/p/D929_15_071/D929_15_071_1200.jpg" alt="Platform Logo" className="platform-logo" />
</div>

      <div className='cs' id="courses">
        <div className="concor">
          <h2>Featured Courses</h2>
          <div className="cor">
            <img src="https://th.bing.com/th/id/OIP.WqAxtGTuq2a2OJyWp5njNAAAAA?w=263&h=263&rs=1&pid=ImgDetMain" alt="python course" />
            <h3>PYTHON</h3>
            <p>Python has emerged as one of the most popular and versatile programming languages, renowned for its simplicity, readability, and vast ecosystem of libraries and frameworks.</p>
            <button onClick={Pythoncr} className="btn">Enroll Now</button>
          </div>
          <div className="cor">
            <img src="https://th.bing.com/th/id/OIP.pqcPskVdTrJqfhZ-Z49AtQHaHn?rs=1&pid=ImgDetMain" alt="html course" />
            <h3>HTML</h3>
            <p>HTML is the backbone of the World Wide Web, serving as the standard markup language for creating and structuring web pages.</p>
            <button onClick={Htmlcr} className="btn">Enroll Now</button>
          </div>
          <div className="cor">
            <img src="https://th.bing.com/th/id/OIP.ALcdSbpATl1AiYYTpT7KVAAAAA?rs=1&pid=ImgDetMain" alt="java course" />
            <h3>JAVA</h3>
            <p>Java is a versatile and powerful programming language that serves as the bedrock for countless software applications, websites, and mobile apps.</p>
            <button onClick={Javacr} className="btn">Enroll Now</button>
          </div>
          <div className="cor">
            <img src="https://i.ytimg.com/vi/lq60Vfa_U4U/maxresdefault.jpg" alt="Data Science Course" />
            <h3>DATA STRUCTURE IN C</h3>
            <p>Data structures form the backbone of efficient algorithms, enabling programmers to organize and manipulate data in various ways to solve complex problems.</p>
            <button onClick={DScr} className="btn">Enroll Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
