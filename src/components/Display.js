import React from 'react';
import AnswerList from './AnswerList';

function Display({question, rightAnswer, nexStep}) {
    return (
        <div className="display-box">
            <h3>{question.text}</h3>
            {!rightAnswer && <p>Wrong answer.  Please try again.</p>}
            <AnswerList question={question} nextStep={nextStep}/>
        </div>
    );
}

export default Display;