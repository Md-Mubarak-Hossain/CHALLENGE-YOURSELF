import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import './Practice.css'
const Practices = () => {
    const practices = useLoaderData();
    console.log(practices)
    const { data } = practices;
    const { id, questions, name, logo } = data;
    console.log(questions);
    console.log(id);
    return (
        <div className='flex w-100 bg-secondary'>
            <img className='w-25' height={180} src={logo} alt={name} />
            <h1 className='text-warning text-uppercase'>Wow!!! Here is {name}<img height={50} src={logo} alt={name} /> Quiz!!!</h1>
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