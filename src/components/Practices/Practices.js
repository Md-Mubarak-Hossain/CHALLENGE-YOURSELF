import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import './Practice.css'
const Practices = () => {
    const practices = useLoaderData();
    const { data } = practices;
    const { id, questions } = data;
    console.log(questions);
    console.log(id);
    return (
        <div className='flex w-100'>
            <p>Practices</p>
            <div>
                {
                    questions.map(ques => <Quizes key={ques.id}
                        ques={ques}></Quizes>)
                }
            </div>

        </div>
    );
};

export default Practices;