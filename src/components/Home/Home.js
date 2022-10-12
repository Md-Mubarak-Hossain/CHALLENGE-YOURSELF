import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';


const Home = () => {
    const { data } = useLoaderData();

    console.log(data);
    return (
        <div className='my-5'>
            <div className='bg-secondary text-center my-0'><h2>Courses:{data.length}</h2></div>
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