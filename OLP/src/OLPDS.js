import React, { useState } from 'react';
import Landing from './OLPLanding.js';
import DsQuiz from './DSQuiz.js';
const DS = () => {
  const [isLandingVisible, setLandingVisible] = useState(false);
  const [isdsquizVisible, setdsquizVisible] = useState(false);
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

const Dsquiz = () => {
  console.log(progress)
  if (progress === 100) {
    setdsquizVisible(true);
  } else {
    alert('Progress Must be 100% to Take Quiz');
  }
};
      
if (isdsquizVisible) {
  return <DsQuiz/>;
}
  return (
    <>
    <div className='tot'>
      <div className="hh">
        <h1>Data Structures and Algorithms Course</h1>
      </div>
      <div className="lessons">
        <div>
          <h2>Lessons</h2>
          <ul>
            <li>
              <input type="checkbox" id="lesson1" />
              <label htmlFor="lesson1">Introduction to Data structure</label>
            </li>
            <li>
              <input type="checkbox" id="lesson2" />
              <label htmlFor="lesson2">Arrays and Linked Lists</label>
            </li>
            <li>
              <input type="checkbox" id="lesson3" />
              <label htmlFor="lesson3">Stacks and Queues</label>
            </li>
            <li>
              <input type="checkbox" id="lesson4" />
              <label htmlFor="lesson4">Trees and Graphs in DS</label>
            </li>
            <li>
              <input type="checkbox" id="lesson5" />
              <label htmlFor="lesson5">Hash Tables and Hash Function</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="butt">
      <button onClick={Completebuttonclick} className="btn">Complete</button>
        <button onClick={Dsquiz} className="btn">Attend Quiz</button>
        <button className='bk' onClick={Backbuttonclick}>Go Back</button>
      </div></div>
    </>
  );
};
export default DS;
