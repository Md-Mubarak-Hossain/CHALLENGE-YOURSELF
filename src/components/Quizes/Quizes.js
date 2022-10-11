import React from 'react';

const Quizes = ({ ques }) => {
    const { correctAnswer, id, options, question } = ques;
    const [a, b, c, d] = options;
    return (
        <div>
            <h3>{question}</h3>
            <p>a.{a}</p>
            <p>b.{b}</p>
            <p>c.{c}</p>
            <p>d.{d}</p>
            <div><h5>correctAnswer:{correctAnswer}</h5></div>
        </div>

    );
};

export default Quizes;
