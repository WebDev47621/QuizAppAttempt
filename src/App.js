import React, { useState } from 'react';
import './App.css';
//Importing components here
import Display from './components/Display'
import questions from './questions';

function App() {
  const [index, setIndex] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(true);

  const nextStep = (e, answer) => {
    e.preventDefault();
    if (answer.correct) {
      setRightAnswer(true);
      setIndex(index => index + 1);
    } else {
      setRightAnswer(false);
    }
  }

  return (
    <div className="App">
      <Display question={questions[index]} rightAnswer={rightAnswer} nextStep={nextStep} />
    </div>
  );
}

export default App;
