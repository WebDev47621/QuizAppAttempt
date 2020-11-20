import React from 'react';

function Answer({answer, nextStep}) {
    const handleClick = () => {
        nextStep(answer);
    }
    return (
        <button type="submit" onClick={handleClick}>{answer.text}</button>
    );
}

export default Answer;