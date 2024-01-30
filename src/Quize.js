import React, { useState } from 'react';
import { Quizedata } from './Quizedata';
import Quizresult from './Quizresult';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const updateScoreIfCorrect = () => {
    if (selectedOption === Quizedata[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const updateQuestion = () => {
    if (currentQuestion < Quizedata.length - 1) {
      updateScoreIfCorrect();
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(0);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      <p className='heading-text'>Todo app</p>
      <div className='container'>
        {showResult ? (
          <Quizresult score={score} totalscore={Quizedata.length} />
        ) : (
          <>
            <div className='question'>
              <span id='question-number'>{currentQuestion + 1}</span>
              <span id='question-txt'>{Quizedata[currentQuestion].question}</span>
            </div>

            <div className='option-container'>
              {Quizedata[currentQuestion].options.map((option, i) => (
                <button
                  className={`option-btn ${selectedOption === i + 1 ? 'checked' : null}`}
                  key={i}
                  onClick={() => setSelectedOption(i + 1)}
                >
                  {option}
                </button>
              ))}
            </div>
            <input type='button' value='next' id='next-button' onClick={updateQuestion} />
          </>
        )}
      </div>
    </div>
  );
}
