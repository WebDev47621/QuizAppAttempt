import React from 'react';
import Answer from './Answer';

function AnswerList({question, nextStep}) {
    return (
        <form class="form-test">
            <ul className="answer-list">{question.answers.map(answer => <li><Answer answer={answer} nextStep={nextStep} key={Math.round(new Date().getTime())} /></li>)}</ul>
        </form>
    );
}

export default AnswerList;