import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const Practices = () => {
    const practices = useLoaderData();
    const { data } = practices;
    const { id, questions } = data;
    console.log(questions);
    return (
        <div>
            <p>Practices</p>
            {
                questions.map(ques => <Quizes key={ques.id}
                    ques={ques}></Quizes>)
            }
        </div>
    );
};

export default Practices;