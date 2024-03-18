import React, { useState } from 'react';
import './quiz.css';
import Landing from './OLPLanding';

const PYquiz = () => {
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
    q1: 'c',
    q2: 'b',
    q3: 'a',
    q4: 'c',
    q5: 'b',
    q6: 'c',
    q7: 'c',
    q8: 'c',
    q9: 'b',
    q10: 'b',
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
      <h1>Course point -Python Quiz</h1>
      <ul>
        {/* Question 1 */}
        <li className="less" id="lesson1">
          <label htmlFor="lesson1" className="question">
            <h3>1. What is the correct way to create a variable in Python?</h3>
            <ul className="options">
              <li>
                <input
                  type="radio"
                  name="q1"
                  id="q1_option1"
                  onChange={() => handleAnswerChange('q1', 'a')}
                />
                <label htmlFor="q1_option1">a. var x = 5;</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="q1"
                  id="q1_option2"
                  onChange={() => handleAnswerChange('q1', 'b')}
                />
                <label htmlFor="q1_option2">b. let x = 5;</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="q1"
                  id="q1_option3"
                  onChange={() => handleAnswerChange('q1', 'c')}
                />
                <label htmlFor="q1_option3">c. x = 5;</label>
              </li>
            </ul>
          </label>
        </li>
{/* Question 2 */}
<li className="less" id="lesson2">
          <label htmlFor="lesson2" className="question">
            <h3>2. Which of the following is not a valid data type in Python?</h3>
            <ul className="options">
              <li>
                <input
                  type="radio"
                  name="q2"
                  id="q2_option1"
                  onChange={() => handleAnswerChange('q2', 'a')}
                />
                <label htmlFor="q2_option1">a. List</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="q2"
                  id="q2_option2"
                  onChange={() => handleAnswerChange('q2', 'b')}
                />
                <label htmlFor="q2_option2">b. Array</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="q2"
                  id="q2_option3"
                  onChange={() => handleAnswerChange('q2', 'c')}
                />
                <label htmlFor="q2_option3">c. Tuple</label>
              </li>
            </ul>
          </label>
        </li>

        {/* Question 3 */}
        <li className="less" id="lesson3">
          <label htmlFor="lesson3" className="question">
            <h3>3. What does the 'print()' function do in Python?</h3>
            <ul className="options">
              <li>
                <input
                  type="radio"
                  name="q3"
                  id="q3_option1"
                  onChange={() => handleAnswerChange('q3', 'a')}
                />
                <label htmlFor="q3_option1">a. Print the output to the console</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="q3"
                  id="q3_option2"
                  onChange={() => handleAnswerChange('q3', 'b')}
                />
                <label htmlFor="q3_option2">b. Store the output in a variable</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="q3"
                  id="q3_option3"
                  onChange={() => handleAnswerChange('q3', 'c')}
                />
                <label htmlFor="q3_option3">c. Print the output to a file</label>
              </li>
            </ul>
          </label>
        </li>
        <li className="less" id="lesson4">
    <label htmlFor="lesson4" className="question">
      <h3>4. What is the output of the following code: print(2 + 2 * 3)</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q4"
            id="q4_option1"
            onChange={() => handleAnswerChange('q4', 'a')}
          />
          <label htmlFor="q4_option1">a. 8</label>
        </li>
        <li>
          <input
            type="radio"
            name="q4"
            id="q4_option2"
            onChange={() => handleAnswerChange('q4', 'b')}
          />
          <label htmlFor="q4_option2">b. 10</label>
        </li>
        <li>
          <input
            type="radio"
            name="q4"
            id="q4_option3"
            onChange={() => handleAnswerChange('q4', 'c')}
          />
          <label htmlFor="q4_option3">c. 12</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 5 */}
  <li className="less" id="lesson5">
    <label htmlFor="lesson5" className="question">
      <h3>5. Which keyword is used to define a function in Python?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q5"
            id="q5_option1"
            onChange={() => handleAnswerChange('q5', 'a')}
          />
          <label htmlFor="q5_option1">a. func</label>
        </li>
        <li>
          <input
            type="radio"
            name="q5"
            id="q5_option2"
            onChange={() => handleAnswerChange('q5', 'b')}
          />
          <label htmlFor="q5_option2">b. def</label>
        </li>
        <li>
          <input
            type="radio"
            name="q5"
            id="q5_option3"
            onChange={() => handleAnswerChange('q5', 'c')}
          />
          <label htmlFor="q5_option3">c. define</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 6 */}
  <li className="less" id="lesson6">
    <label htmlFor="lesson6" className="question">
      <h3>6. What is the correct way to comment multiple lines in Python?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q6"
            id="q6_option1"
            onChange={() => handleAnswerChange('q6', 'a')}
          />
          <label htmlFor="q6_option1">a. // This is a comment</label>
        </li>
        <li>
          <input
            type="radio"
            name="q6"
            id="q6_option2"
            onChange={() => handleAnswerChange('q6', 'b')}
          />
          <label htmlFor="q6_option2">b. ''' This is a comment '''</label>
        </li>
        <li>
          <input
            type="radio"
            name="q6"
            id="q6_option3"
            onChange={() => handleAnswerChange('q6', 'c')}
          />
          <label htmlFor="q6_option3">c. # This is a comment</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 7 */}
  <li className="less" id="lesson7">
    <label htmlFor="lesson7" className="question">
      <h3>7. Which of the following is a mutable data type in Python?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q7"
            id="q7_option1"
            onChange={() => handleAnswerChange('q7', 'a')}
          />
          <label htmlFor="q7_option1">a. Tuple</label>
        </li>
        <li>
          <input
            type="radio"
            name="q7"
            id="q7_option2"
            onChange={() => handleAnswerChange('q7', 'b')}
          />
          <label htmlFor="q7_option2">b. String</label>
        </li>
        <li>
          <input
            type="radio"
            name="q7"
            id="q7_option3"
            onChange={() => handleAnswerChange('q7', 'c')}
          />
          <label htmlFor="q7_option3">c. List</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 8 */}
  <li className="less" id="lesson8">
    <label htmlFor="lesson8" className="question">
      <h3>8. What does the 'len()' function do in Python?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q8"
            id="q8_option1"
            onChange={() => handleAnswerChange('q8', 'a')}
          />
          <label htmlFor="q8_option1">a. Returns the length of a string</label>
        </li>
        <li>
          <input
            type="radio"
            name="q8"
            id="q8_option2"
            onChange={() => handleAnswerChange('q8', 'b')}
          />
          <label htmlFor="q8_option2">b. Returns the length of a list</label>
        </li>
        <li>
          <input
            type="radio"
            name="q8"
            id="q8_option3"
            onChange={() => handleAnswerChange('q8', 'c')}
          />
          <label htmlFor="q8_option3">c. Both a and b</label>
        </li>
      </ul>
    </label>
  </li>
        <li className="less" id="lesson9">
          <label htmlFor="lesson9" className="question">
            <h3>9. What is the output of the following code: print("Hello" + "World")</h3>
            <ul className="options">
              <li>
                <input
                  type="radio"
                  name="q9"
                  id="q9_option1"
                  onChange={() => handleAnswerChange('q9', 'a')}
                />
                <label htmlFor="q9_option1">a. Hello World</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="q9"
                  id="q9_option2"
                  onChange={() => handleAnswerChange('q9', 'b')}
                />
                <label htmlFor="q9_option2">b. HelloWorld</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="q9"
                  id="q9_option3"
                  onChange={() => handleAnswerChange('q9', 'c')}
                />
                <label htmlFor="q9_option3">c. Hello+World</label>
              </li>
            </ul>
          </label>
        </li>
        <li className="less" id="lesson10">
          <label htmlFor="lesson10" className="question">
            <h3>10. Which of the following is not a valid comparison operator in Python?</h3>
            <ul className="options">
              <li>
                <input
                  type="radio"
                  name="q10"
                  id="q10_option1"
                  onChange={() => handleAnswerChange('q10', 'a')}
                />
                <label htmlFor="q10_option1">a. &lt;=</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="q10"
                  id="q10_option2"
                  onChange={() => handleAnswerChange('q10', 'b')}
                />
                <label htmlFor="q10_option2">b. =</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="q10"
                  id="q10_option3"
                  onChange={() => handleAnswerChange('q10', 'c')}
                />
                <label htmlFor="q10_option3">c. ==</label>
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

export default PYquiz;
