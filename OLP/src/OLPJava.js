import React, { useState } from 'react';
import Landing from './OLPLanding.js';
import JavaQuiz from './Javaquiz.js';
const Java = () => {
  const [isLandingVisible, setLandingVisible] = useState(false);
  const [isjavaquizVisible, setjavaquizVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const Backbuttonclick = () => {
    // Update the state to navigate to Landing component
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

const Javaquiz = () => {
  console.log(progress)
  if (progress === 100) {
    setjavaquizVisible(true);
  } else {
    alert('Progress Must be 100% to Take Quiz');
  }
};
      
if (isjavaquizVisible) {
  return <JavaQuiz/>;
}
  return (
    <>
    <div className='tot'>
      <div className="hh">
        <h1>Java Course</h1>
      </div>
      <div className="lessons">
        <div>
          <h2>Lessons</h2>
          <ul>
            <li>
              <input type="checkbox" id="lesson1" />
              <label htmlFor="lesson1">Introduction to Java</label>
            </li>
            <li>
              <input type="checkbox" id="lesson2" />
              <label htmlFor="lesson2">Basic of oop's concept</label>
            </li>
            <li>
              <input type="checkbox" id="lesson3" />
              <label htmlFor="lesson3">Exception handling in oop's</label>
            </li>
            <li>
              <input type="checkbox" id="lesson4" />
              <label htmlFor="lesson4">Threads,multitasking,javafx</label>
            </li>
            <li>
              <input type="checkbox" id="lesson5" />
              <label htmlFor="lesson5">Data base connectivity</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="butt">
       
        <button onClick={Completebuttonclick} className="btn">Complete</button>
        <button onClick={Javaquiz} className="btn">Attend Quiz</button>
        <button className='bk' onClick={Backbuttonclick}>Go Back</button>
      </div></div>
    </>
  );
};

export default Java;
