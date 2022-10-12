import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';


const Home = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div className='mb-5  bg-light'>
            <div className='bg-secondary text-center m-0 p-5'><h2 className='text-warning'>Hey! Here is Courses:{data.length}</h2></div>
            <div className='d-lg-flex d-xl-flex d-xxl-flex'>
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