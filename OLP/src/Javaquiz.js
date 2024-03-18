import React, { useState } from 'react';
import './quiz.css';
import Landing from './OLPLanding';

const JavaQuiz = () => {
  const [isLandingVisible, setLandingVisible] = useState(false);
  const [answers, setAnswers] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    q8: null,
    q9: null,
    q10: null,
  });

  const Backbuttonclick = () => {
    setLandingVisible(true);
  };

  const correctAnswers = {
    q1: 'a', // Correct answer for question 1
    q2: 'a', // Correct answer for question 2
    q3: 'a', // Correct answer for question 3
    q4: 'a', // Correct answer for question 4
    q5: 'a', // Correct answer for question 5
    q6: 'a', // Correct answer for question 6
    q7: 'a', // Correct answer for question 7
    q8: 'a', // Correct answer for question 8
    q9: 'a', // Correct answer for question 9
    q10: 'a', // Correct
  };

  const handleAnswerChange = (question, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: value }));
  };

  const handleSubmitQuiz = () => {
    if (Object.values(answers).includes(null)) {
      alert('Please answer all questions before submitting the quiz.');
      return;
    }

    const isAllCorrect = Object.entries(answers).every(([question, answer]) => {
      return answer === correctAnswers[question];
    });

    if (isAllCorrect) {
      alert('Quiz completed successfully!');
    } else {
      alert('Some answers are incorrect. Please review your answers.');
    }
  };

  if (isLandingVisible) {
    return <Landing />;
  }


  return (
    <div className="yogan">
      <h1>Course point-Java Quiz</h1>
      <ul>
  {/* Lesson 1 */}
  <li className="less" id="lesson1">
    <label htmlFor="lesson1" className="question">
      <h3>1. What is Java?</h3>
      <ul className="options">
        <li>
          <input type="radio" name="q1" id="q1_option1" onChange={() => handleAnswerChange('q1', 'a')} />
          <label htmlFor="q1_option1">a. A programming language;</label>
        </li>
        <li>
          <input type="radio" name="q1" id="q1_option2" onChange={() => handleAnswerChange('q1', 'b')} />
          <label htmlFor="q1_option2">b. coffee brand;</label>
        </li>
        <li>
          <input type="radio" name="q1" id="q1_option3" onChange={() => handleAnswerChange('q1', 'c')} />
          <label htmlFor="q1_option3">c. type of car;</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Lesson 2 */}
  <li className="less" id="lesson2">
    <label htmlFor="lesson2" className="question">
      <h3>2. What is the main feature of Java?</h3>
      <ul className="options">
        <li>
          <input type="radio" name="q2" id="q2_option1" onChange={() => handleAnswerChange('q2', 'a')} />
          <label htmlFor="q2_option1">a. Platform independence</label>
        </li>
        <li>
          <input type="radio" name="q2" id="q2_option2" onChange={() => handleAnswerChange('q2', 'b')} />
          <label htmlFor="q2_option2">b. High performancey</label>
        </li>
        <li>
          <input type="radio" name="q2" id="q2_option3" onChange={() => handleAnswerChange('q2', 'c')} />
          <label htmlFor="q2_option3">c. Low memory usage</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Lesson 3 */}
  <li className="less" id="lesson3">
    <label htmlFor="lesson3" className="question">
      <h3>3. Which keyword is used to define a class in Java?</h3>
      <ul className="options">
        <li>
          <input type="radio" name="q3" id="q3_option1" onChange={() => handleAnswerChange('q3', 'a')} />
          <label htmlFor="q3_option1">a. class</label>
        </li>
        <li>
          <input type="radio" name="q3" id="q3_option2" onChange={() => handleAnswerChange('q3', 'b')} />
          <label htmlFor="q3_option2">b. void</label>
        </li>
        <li>
          <input type="radio" name="q3" id="q3_option3" onChange={() => handleAnswerChange('q3', 'c')} />
          <label htmlFor="q3_option3">c. function</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Lesson 4 */}
  <li className="less" id="lesson4">
    <label htmlFor="lesson4" className="question">
      <h3>4. What is an interface in Java?</h3>
      <ul className="options">
        <li>
          <input type="radio" name="q4" id="q4_option1" onChange={() => handleAnswerChange('q4', 'a')} />
          <label htmlFor="q4_option1">a. A reference type in Java</label>
        </li>
        <li>
          <input type="radio" name="q4" id="q4_option2" onChange={() => handleAnswerChange('q4', 'b')} />
          <label htmlFor="q4_option2">b. A class that contains only abstract methods</label>
        </li>
        <li>
          <input type="radio" name="q4" id="q4_option3" onChange={() => handleAnswerChange('q4', 'c')} />
          <label htmlFor="q4_option3">c. A way to instantiate objects</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Lesson 5 */}
  <li className="less" id="lesson5">
    <label htmlFor="lesson5" className="question">
      <h3>5. Which statement is used to exit from a loop in Java?</h3>
      <ul className="options">
        <li>
          <input type="radio" name="q5" id="q5_option1" onChange={() => handleAnswerChange('q5', 'a')} />
          <label htmlFor="q5_option1">a. break</label>
        </li>
        <li>
          <input type="radio" name="q5" id="q5_option2" onChange={() => handleAnswerChange('q5', 'b')} />
          <label htmlFor="q5_option2">b. continue</label>
        </li>
        <li>
          <input type="radio" name="q5" id="q5_option3" onChange={() => handleAnswerChange('q5', 'c')} />
          <label htmlFor="q5_option3">c. return</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Lesson 6 */}
  <li className="less" id="lesson6">
    <label htmlFor="lesson6" className="question">
      <h3>6. What is keyword used to create class?</h3>
      <ul className="options">
        <li>
          <input type="radio" name="q6" id="q6_option1" onChange={() => handleAnswerChange('q6', 'a')} />
          <label htmlFor="q6_option1">a. className</label>
        </li>
        <li>
          <input type="radio" name="q6" id="q6_option2" onChange={() => handleAnswerChange('q6', 'b')} />
          <label htmlFor="q6_option2">b. new</label>
        </li>
        <li>
          <input type="radio" name="q6" id="q6_option3" onChange={() => handleAnswerChange('q6', 'c')} />
          <label htmlFor="q6_option3">c. class</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Lesson 7 */}
  <li className="less" id="lesson7">
    <label htmlFor="lesson7" className="question">
      <h3>7. Which data type is used to store a single character in Java?</h3>
      <ul className="options">
        <li>
          <input type="radio" name="q7" id="q7_option1" onChange={() => handleAnswerChange('q7', 'a')} />
          <label htmlFor="q7_option1">a. char</label>
        </li>
        <li>
          <input type="radio" name="q7" id="q7_option2" onChange={() => handleAnswerChange('q7', 'b')} />
          <label htmlFor="q7_option2">b. String</label>
        </li>
        <li>
          <input type="radio" name="q7" id="q7_option3" onChange={() => handleAnswerChange('q7', 'c')} />
          <label htmlFor="q7_option3">c. Character</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Lesson 8 */}
  <li className="less" id="lesson8">
    <label htmlFor="lesson8" className="question">
      <h3>8. What does JVM stand for?</h3>
      <ul className="options">
        <li>
          <input type="radio" name="q8" id="q8_option1" onChange={() => handleAnswerChange('q8', 'a')} />
          <label htmlFor="q8_option1">a. Java Virtual Machine</label>
        </li>
        <li>
          <input type="radio" name="q8" id="q8_option2" onChange={() => handleAnswerChange('q8', 'b')} />
          <label htmlFor="q8_option2">b. Java Virtual Memory</label>
        </li>
        <li>
          <input type="radio" name="q8" id="q8_option3" onChange={() => handleAnswerChange('q8', 'c')} />
          <label htmlFor="q8_option3">c. Java Visual Model</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Lesson 9 */}
  <li className="less" id="lesson9">
    <label htmlFor="lesson9" className="question">
      <h3>9. Which keyword is used to create an object in Java?</h3>
      <ul className="options">
        <li>
          <input type="radio" name="q9" id="q9_option1" onChange={() => handleAnswerChange('q9', 'a')} />
          <label htmlFor="q9_option1">a. new</label>
        </li>
        <li>
          <input type="radio" name="q9" id="q9_option2" onChange={() => handleAnswerChange('q9', 'b')} />
          <label htmlFor="q9_option2">b. create</label>
        </li>
        <li>
          <input type="radio" name="q9" id="q9_option3" onChange={() => handleAnswerChange('q9', 'c')} />
          <label htmlFor="q9_option3">c. instantiate</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Lesson 10 */}
  <li className="less" id="lesson10">
    <label htmlFor="lesson10" className="question">
      <h3>10. Which of the following is not a valid identifier in Java?</h3>
      <ul className="options">
        <li>
          <input type="radio" name="q10" id="q10_option1" onChange={() => handleAnswerChange('q10', 'a')} />
          <label htmlFor="q10_option1">a. total_amoun</label>
        </li>
        <li>
          <input type="radio" name="q10" id="q10_option2" onChange={() => handleAnswerChange('q10', 'b')} />
          <label htmlFor="q10_option2">b. $amount</label>
        </li>
        <li>
          <input type="radio" name="q10" id="q10_option3" onChange={() => handleAnswerChange('q10', 'c')} />
          <label htmlFor="q10_option3">c. 3xValue</label>
        </li>
      </ul>
    </label>
  </li>
</ul>

      <div className="buttons">
        <button className="sbtn" onClick={handleSubmitQuiz}>
          Submit Quiz
        </button>
        <button className="buk" onClick={Backbuttonclick}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default JavaQuiz;
