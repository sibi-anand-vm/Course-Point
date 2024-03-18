import React, { useState } from 'react';
import Landing from './OLPLanding.js';
import HtmlQuiz from './Htmlquiz.js';
const Html = () => {
  const [isLandingVisible, setLandingVisible] = useState(false);
  const [ishtmlquizVisible, sethtmlquizVisible] = useState(false);
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

const Htmlquiz = () => {
  console.log(progress)
  if (progress === 100) {
    sethtmlquizVisible(true);
  } else {
    alert('Progress Must be 100% to Take Quiz');
  }
};
if (ishtmlquizVisible) {
  return <HtmlQuiz/>;
}
  return (
    <>
    <div className='tot'>
      <div className="hh">
        <h1>HTML Course</h1>
      </div>
      <div className="lessons">
        <div>
          <h2>Lessons</h2>
          <ul>
            <li>
              <input type="checkbox" id="lesson1" />
              <label htmlFor="lesson1">Introduction to HTML</label>
            </li>
            <li>
              <input type="checkbox" id="lesson2" />
              <label htmlFor="lesson2">Tags and Elements,Attributes</label>
            </li>
            <li>
              <input type="checkbox" id="lesson3" />
              <label htmlFor="lesson3">Use of Formatting,Heading,etc</label>
            </li>
            <li>
              <input type="checkbox" id="lesson4" />
              <label htmlFor="lesson4">List,class,Id,Framwork in html</label>
            </li>
            <li>
              <input type="checkbox" id="lesson5" />
              <label htmlFor="lesson5">Css,Javascript connectivity</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="butt">
      <button className="btn" onClick={Completebuttonclick}>Complete</button>
        <button className="btn" onClick={Htmlquiz}>Attend Quiz</button>
        <button className='bk' onClick={Backbuttonclick}>Go Back</button>
      </div></div>
    </>
  );
};

export default Html;
