import React, { useState } from 'react';
import Landing from './OLPLanding.js';
import PYquiz from './Pythonquiz.js';
const Python = () => {
  const [isLandingVisible, setLandingVisible] = useState(false);
  const [ispyquizVisible, setpyquizVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const Backbuttonclick = () => {
    setLandingVisible(true);
  };

  if (isLandingVisible) {
    return <Landing />;
  }
  const Completebuttonclick = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedCheckboxes = Array.from(checkboxes).filter((checkbox) => checkbox.checked);
    const newProgress = (checkedCheckboxes.length / checkboxes.length) * 100;
    if(newProgress!==100)
    alert('Complete All Modules')
    else
    alert('Completed All Modules')
 setProgress(newProgress)
  };
  
  const Pyquiz = () => {
    console.log(progress)
    if (progress === 100) {
      setpyquizVisible(true);
    } else {
      alert('Progress Must be 100% to Take Quiz');
    }
  };
        
  if (ispyquizVisible) {
    return <PYquiz/>;
  }
  return (
    <>
      <div className='tot'>
        <div className="hh">
          <h1>Python Course</h1>
        </div>
        <div className="lessons">
          <div>
            <h2>Lessons</h2>
            <ul>
              <li>
                <input type="checkbox" id="lesson1" />
                <label htmlFor="lesson1">Introduction to Python</label>
              </li>
              <li>
                <input type="checkbox" id="lesson2" />
                <label htmlFor="lesson2">Data Types and Variables</label>
              </li>
              <li>
                <input type="checkbox" id="lesson3" />
                <label htmlFor="lesson3">Control Structures</label>
              </li>
              <li>
                <input type="checkbox" id="lesson4" />
                <label htmlFor="lesson4">Functions</label>
              </li>
              <li>
                <input type="checkbox" id="lesson5" />
                <label htmlFor="lesson5">Modules and Packages</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="butt">
          <button className="btn" onClick={Completebuttonclick}>Complete</button>
          <button onClick={Pyquiz} className="btn">Attend Quiz</button>
          <button className='bk' onClick={Backbuttonclick}>Go Back</button>
        </div>
      </div>
    </>
  );
};

export default Python;
