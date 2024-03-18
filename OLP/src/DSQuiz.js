import React, { useState } from 'react';
import './quiz.css';
import Landing from './OLPLanding';

const DSquiz = () => {
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
    q10: 'a', // C
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
      <h1>Course point-Data Structure Quiz</h1>
      <ul>
  {/* Question 1 */}
  <li className="less" id="dsa_question1">
    <label htmlFor="dsa_question1" className="question">
      <h3>1. What is the time complexity of the binary search algorithm?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="dsa_q1"
            id="dsa_q1_option1"
            onChange={() => handleAnswerChange('dsa_q1', 'a')}
          />
          <label htmlFor="dsa_q1_option1">a. O(1)</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q1"
            id="dsa_q1_option2"
            onChange={() => handleAnswerChange('dsa_q1', 'b')}
          />
          <label htmlFor="dsa_q1_option2">b. O(log n)</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q1"
            id="dsa_q1_option3"
            onChange={() => handleAnswerChange('dsa_q1', 'c')}
          />
          <label htmlFor="dsa_q1_option3">c. O(n)</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 2 */}
  <li className="less" id="dsa_question2">
    <label htmlFor="dsa_question2" className="question">
      <h3>2. What data structure is used to implement recursion?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="dsa_q2"
            id="dsa_q2_option1"
            onChange={() => handleAnswerChange('dsa_q2', 'a')}
          />
          <label htmlFor="dsa_q2_option1">a. Stack</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q2"
            id="dsa_q2_option2"
            onChange={() => handleAnswerChange('dsa_q2', 'b')}
          />
          <label htmlFor="dsa_q2_option2">b. Queue</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q2"
            id="dsa_q2_option3"
            onChange={() => handleAnswerChange('dsa_q2', 'c')}
          />
          <label htmlFor="dsa_q2_option3">c. Linked List</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 3 */}
  <li className="less" id="dsa_question3">
    <label htmlFor="dsa_question3" className="question">
      <h3>3. What is the purpose of a hash function in hash tables?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="dsa_q3"
            id="dsa_q3_option1"
            onChange={() => handleAnswerChange('dsa_q3', 'a')}
          />
          <label htmlFor="dsa_q3_option1">a. To sort elements</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q3"
            id="dsa_q3_option2"
            onChange={() => handleAnswerChange('dsa_q3', 'b')}
          />
          <label htmlFor="dsa_q3_option2">b. To convert keys into array indices</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q3"
            id="dsa_q3_option3"
            onChange={() => handleAnswerChange('dsa_q3', 'c')}
          />
          <label htmlFor="dsa_q3_option3">c. To perform bitwise operations</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 4 */}
  <li className="less" id="dsa_question4">
    <label htmlFor="dsa_question4" className="question">
      <h3>4. What is the time complexity of quicksort in the average case?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="dsa_q4"
            id="dsa_q4_option1"
            onChange={() => handleAnswerChange('dsa_q4', 'a')}
          />
          <label htmlFor="dsa_q4_option1">a. O(n)</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q4"
            id="dsa_q4_option2"
            onChange={() => handleAnswerChange('dsa_q4', 'b')}
          />
          <label htmlFor="dsa_q4_option2">b. O(n log n)</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q4"
            id="dsa_q4_option3"
            onChange={() => handleAnswerChange('dsa_q4', 'c')}
          />
          <label htmlFor="dsa_q4_option3">c. O(n^2)</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 5 */}
  <li className="less" id="dsa_question5">
    <label htmlFor="dsa_question5" className="question">
      <h3>5. In a binary tree, a node with no children is called:</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="dsa_q5"
            id="dsa_q5_option1"
            onChange={() => handleAnswerChange('dsa_q5', 'a')}
          />
          <label htmlFor="dsa_q5_option1">a. Root</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q5"
            id="dsa_q5_option2"
            onChange={() => handleAnswerChange('dsa_q5', 'b')}
          />
          <label htmlFor="dsa_q5_option2">b. Leaf</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q5"
            id="dsa_q5_option3"
            onChange={() => handleAnswerChange('dsa_q5', 'c')}
          />
          <label htmlFor="dsa_q5_option3">c. Parent</label>
        </li>
      </ul>
    </label>
  </li>
  <li className="less" id="dsa_question6">
    <label htmlFor="dsa_question6" className="question">
      <h3>6. What is the purpose of dynamic programming in algorithms?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="dsa_q6"
            id="dsa_q6_option1"
            onChange={() => handleAnswerChange('dsa_q6', 'a')}
          />
          <label htmlFor="dsa_q6_option1">a. To reduce the time complexity of algorithms</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q6"
            id="dsa_q6_option2"
            onChange={() => handleAnswerChange('dsa_q6', 'b')}
          />
          <label htmlFor="dsa_q6_option2">b. To solve problems by breaking them into smaller subproblems</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q6"
            id="dsa_q6_option3"
            onChange={() => handleAnswerChange('dsa_q6', 'c')}
          />
          <label htmlFor="dsa_q6_option3">c. To optimize space complexity</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 7 */}
  <li className="less" id="dsa_question7">
    <label htmlFor="dsa_question7" className="question">
      <h3>7. What is the difference between a stack and a queue?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="dsa_q7"
            id="dsa_q7_option1"
            onChange={() => handleAnswerChange('dsa_q7', 'a')}
          />
          <label htmlFor="dsa_q7_option1">a. Stack follows LIFO, and Queue follows FIFO</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q7"
            id="dsa_q7_option2"
            onChange={() => handleAnswerChange('dsa_q7', 'b')}
          />
          <label htmlFor="dsa_q7_option2">b. Stack follows FIFO, and Queue follows LIFO</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q7"
            id="dsa_q7_option3"
            onChange={() => handleAnswerChange('dsa_q7', 'c')}
          />
          <label htmlFor="dsa_q7_option3">c. Stack and Queue have the same order of elements</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 8 */}
  <li className="less" id="dsa_question8">
    <label htmlFor="dsa_question8" className="question">
      <h3>8. What is the significance of Big-O notation in algorithm analysis?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="dsa_q8"
            id="dsa_q8_option1"
            onChange={() => handleAnswerChange('dsa_q8', 'a')}
          />
          <label htmlFor="dsa_q8_option1">a. It represents the best-case complexity of an algorithm</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q8"
            id="dsa_q8_option2"
            onChange={() => handleAnswerChange('dsa_q8', 'b')}
          />
          <label htmlFor="dsa_q8_option2">b. It provides an upper bound on the growth rate of an algorithm</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q8"
            id="dsa_q8_option3"
            onChange={() => handleAnswerChange('dsa_q8', 'c')}
          />
          <label htmlFor="dsa_q8_option3">c. It measures the exact execution time of an algorithm</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 9 */}
  <li className="less" id="dsa_question9">
    <label htmlFor="dsa_question9" className="question">
      <h3>9. What is the purpose of a breadth-first search (BFS) algorithm?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="dsa_q9"
            id="dsa_q9_option1"
            onChange={() => handleAnswerChange('dsa_q9', 'a')}
          />
          <label htmlFor="dsa_q9_option1">a. To find the shortest path in a graph</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q9"
            id="dsa_q9_option2"
            onChange={() => handleAnswerChange('dsa_q9', 'b')}
          />
          <label htmlFor="dsa_q9_option2">b. To perform topological sorting</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q9"
            id="dsa_q9_option3"
            onChange={() => handleAnswerChange('dsa_q9', 'c')}
          />
          <label htmlFor="dsa_q9_option3">c. To find the maximum element in an array</label>
        </li>
      </ul>
    </label>
  </li>

  {/* Question 10 */}
  <li className="less" id="dsa_question10">
    <label htmlFor="dsa_question10" className="question">
      <h3>10. What is the purpose of the divide-and-conquer technique in algorithm design?</h3>
      <ul className="options">
        <li>
          <input
            type="radio"
            name="dsa_q10"
            id="dsa_q10_option1"
            onChange={() => handleAnswerChange('dsa_q10', 'a')}
          />
          <label htmlFor="dsa_q10_option1">a. To merge two sorted arrays</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q10"
            id="dsa_q10_option2"
            onChange={() => handleAnswerChange('dsa_q10', 'b')}
          />
          <label htmlFor="dsa_q10_option2">b. To solve problems by breaking them into smaller subproblems</label>
        </li>
        <li>
          <input
            type="radio"
            name="dsa_q10"
            id="dsa_q10_option3"
            onChange={() => handleAnswerChange('dsa_q10', 'c')}
          />
          <label htmlFor="dsa_q10_option3">c. To perform bitwise operations on integers</label>
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

export default DSquiz;
