import React, { useEffect } from 'react';
import Answer from './Answer';

const keys = [];

function AnswerList({question, nextStep}) {
    return (
        <form>
            <ul>{question.answers.map((answer, i) => <li><Answer answer={answer} nextStep={nextStep} key={Math.round(new Date().getTime())} /></li>)}</ul>
        </form>
    );
}

export default AnswerList;