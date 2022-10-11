import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import Topics from '../Topics/Topics';

const Home = () => {
    const { data } = useLoaderData();

    console.log(data);
    return (
        <div className='my-5'>
            <h3>total topics:{data.length}</h3>
            <div className='d-flex '>
                {
                    data.map(topic => <Course
                        key={topic.id}
                        topic={topic}
                    >

                    </Course>

                    )
                }
            </div>
        </div>
    );
};

export default Home;