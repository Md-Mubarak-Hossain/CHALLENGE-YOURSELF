import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';


const Topics = () => {


    const { data } = useLoaderData();

    console.log(data);
    return (
        <div className='mb-5 bg-primary'>
            <div className='bg-secondary text-center m-0 p-5'><h2 className='text-warning'>Hey! Here is Courses:{data.length}</h2></div>
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

export default Topics;