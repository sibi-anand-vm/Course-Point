import React, { useState } from 'react';
import './quiz.css';
import Landing from './OLPLanding';

const HtmlQuiz = () => {
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
    q10: 'a', // Correct answer for question 10
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
      <h1>Course point-HTML Quiz</h1>
      <ul>
  {/* Question 1 */}
  <li className="less" id="lesson1">
    <label htmlFor="lesson1" className="question">
      <h3>1. What does HTML stand for?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q1"
            id="q1_option1"
            onChange={() => handleAnswerChange('q1', 'a')}
          />
          <label htmlFor="q1_option1">a. Hyper Text Markup Language;</label>
        </li>
        <li>
          <input
            type="radio"
            name="q1"
            id="q1_option2"
            onChange={() => handleAnswerChange('q1', 'b')}
          />
          <label htmlFor="q1_option2">b. Hyperlinks and Text Markup Language;</label>
        </li>
        <li>
          <input
            type="radio"
            name="q1"
            id="q1_option3"
            onChange={() => handleAnswerChange('q1', 'c')}
          />
          <label htmlFor="q1_option3">c. Home Tool Markup Language;</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 2 */}
  <li className="less" id="lesson2">
    <label htmlFor="lesson2" className="question">
      <h3>2. Which HTML tag is used to define an unordered list?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q2"
            id="q2_option1"
            onChange={() => handleAnswerChange('q2', 'a')}
          />
          <label htmlFor="q2_option1">a. &lt;ul&gt;</label>
        </li>
        <li>
          <input
            type="radio"
            name="q2"
            id="q2_option2"
            onChange={() => handleAnswerChange('q2', 'b')}
          />
          <label htmlFor="q2_option2">b.&lt;ol&gt;</label>
        </li>
        <li>
          <input
            type="radio"
            name="q2"
            id="q2_option3"
            onChange={() => handleAnswerChange('q2', 'c')}
          />
          <label htmlFor="q2_option3">c. &lt;li&gt;</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 3 */}
  <li className="less" id="lesson3">
    <label htmlFor="lesson3" className="question">
      <h3>3. Which tag is used to create a hyperlink in HTML?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q3"
            id="q3_option1"
            onChange={() => handleAnswerChange('q3', 'a')}
          />
          <label htmlFor="q3_option1">a. &lt;a&gt;</label>
        </li>
        <li>
          <input
            type="radio"
            name="q3"
            id="q3_option2"
            onChange={() => handleAnswerChange('q3', 'b')}
          />
          <label htmlFor="q3_option2">b. &lt;link&gt;</label>
        </li>
        <li>
          <input
            type="radio"
            name="q3"
            id="q3_option3"
            onChange={() => handleAnswerChange('q3', 'c')}
          />
          <label htmlFor="q3_option3">c. &lt;href&gt;</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 4 */}
  <li className="less" id="lesson4">
    <label htmlFor="lesson4" className="question">
      <h3>4. What is the purpose of the &lt;head&gt; tag in HTML?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q4"
            id="q4_option1"
            onChange={() => handleAnswerChange('q4', 'a')}
          />
          <label htmlFor="q4_option1">a. To provide meta-information about the document</label>
        </li>
        <li>
          <input
            type="radio"
            name="q4"
            id="q4_option2"
            onChange={() => handleAnswerChange('q4', 'b')}
          />
          <label htmlFor="q4_option2">b.To define the main content of the document</label>
        </li>
        <li>
          <input
            type="radio"
            name="q4"
            id="q4_option3"
            onChange={() => handleAnswerChange('q4', 'c')}
          />
          <label htmlFor="q4_option3">c. To specify the title of the document</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 5 */}
  <li className="less" id="lesson5">
    <label htmlFor="lesson5" className="question">
      <h3>5. What does the &lt;img&gt; tag do in HTML?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q5"
            id="q5_option1"
            onChange={() => handleAnswerChange('q5', 'a')}
          />
          <label htmlFor="q5_option1">a. It is used to embed images into a web page</label>
        </li>
        <li>
          <input
            type="radio"
            name="q5"
            id="q5_option2"
            onChange={() => handleAnswerChange('q5', 'b')}
          />
          <label htmlFor="q5_option2">b. It creates a line break in the text</label>
        </li>
        <li>
          <input
            type="radio"
            name="q5"
            id="q5_option3"
            onChange={() => handleAnswerChange('q5', 'c')}
          />
          <label htmlFor="q5_option3">c. It defines a paragraph of text</label>
        </li>
      </ul>
    </label>
  </li>
  <li className="less" id="lesson6">
    <label htmlFor="lesson6" className="question">
      <h3>6. What does the &lt;table&gt; tag do in HTML?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q6"
            id="q6_option1"
            onChange={() => handleAnswerChange('q6', 'a')}
          />
          <label htmlFor="q6_option1">a. It defines a table</label>
        </li>
        <li>
          <input
            type="radio"
            name="q6"
            id="q6_option2"
            onChange={() => handleAnswerChange('q6', 'b')}
          />
          <label htmlFor="q6_option2">b. It creates a hyperlink</label>
        </li>
        <li>
          <input
            type="radio"
            name="q6"
            id="q6_option3"
            onChange={() => handleAnswerChange('q6', 'c')}
          />
          <label htmlFor="q6_option3">c. It defines a form</label>
        </li>
      </ul>
    </label>
  </li>
   {/* Lesson 7 */}
   <li className="less" id="lesson7">
    <label htmlFor="lesson7" className="question">
      <h3>7. Which HTML tag is used to define the footer of a document or a section?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q7"
            id="q7_option1"
            onChange={() => handleAnswerChange('q7', 'a')}
          />
          <label htmlFor="q7_option1">a. &lt;footer&gt;</label>
        </li>
        <li>
          <input
            type="radio"
            name="q7"
            id="q7_option2"
            onChange={() => handleAnswerChange('q7', 'b')}
          />
          <label htmlFor="q7_option2">b. &lt;section&gt;</label>
        </li>
        <li>
          <input
            type="radio"
            name="q7"
            id="q7_option3"
            onChange={() => handleAnswerChange('q7', 'c')}
          />
          <label htmlFor="q7_option3">c. &lt;div&gt;</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Lesson 8 */}
  <li className="less" id="lesson8">
    <label htmlFor="lesson8" className="question">
      <h3>8. Which attribute is used to specify the URL of the page the link goes to?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q8"
            id="q8_option1"
            onChange={() => handleAnswerChange('q8', 'a')}
          />
          <label htmlFor="q8_option1">a. href</label>
        </li>
        <li>
          <input
            type="radio"
            name="q8"
            id="q8_option2"
            onChange={() => handleAnswerChange('q8', 'b')}
          />
          <label htmlFor="q8_option2">b. src</label>
        </li>
        <li>
          <input
            type="radio"
            name="q8"
            id="q8_option3"
            onChange={() => handleAnswerChange('q8', 'c')}
          />
          <label htmlFor="q8_option3">c. link</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Lesson 9 */}
  <li className="less" id="lesson9">
    <label htmlFor="lesson9" className="question">
      <h3>9. Which tag is used to define a section of navigation links?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q9"
            id="q9_option1"
            onChange={() => handleAnswerChange('q9', 'a')}
          />
          <label htmlFor="q9_option1">a. &lt;nav&gt;</label>
        </li>
        <li>
          <input
            type="radio"
            name="q9"
            id="q9_option2"
            onChange={() => handleAnswerChange('q9', 'b')}
          />
          <label htmlFor="q9_option2">b. &lt;navbar&gt;</label>
        </li>
        <li>
          <input
            type="radio"
            name="q9"
            id="q9_option3"
            onChange={() => handleAnswerChange('q9', 'c')}
          />
          <label htmlFor="q9_option3">c. &lt;menu&gt;</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Lesson 10 */}
  <li className="less" id="lesson10">
    <label htmlFor="lesson10" className="question">
      <h3>10. Which HTML element is used to define important text?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="q10"
            id="q10_option1"
            onChange={() => handleAnswerChange('q10', 'a')}
          />
          <label htmlFor="q10_option1">a. &lt;strong&gt;</label>
        </li>
        <li>
          <input
            type="radio"
            name="q10"
            id="q10_option2"
            onChange={() => handleAnswerChange('q10', 'b')}
          />
          <label htmlFor="q10_option2">b. &lt;em&gt;</label>
        </li>
        <li>
          <input
            type="radio"
            name="q10"
            id="q10_option3"
            onChange={() => handleAnswerChange('q10', 'c')}
          />
          <label htmlFor="q10_option3">c. &lt;bold&gt;</label>
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

export default HtmlQuiz;
