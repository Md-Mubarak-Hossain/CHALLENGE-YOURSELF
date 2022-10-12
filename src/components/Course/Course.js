import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ topic }) => {
    const { id, name, logo, } = topic;
    return (
        <div className='p-2 mt-0 '>
            <img className='m-0' height={30} src={logo} alt={name} />
            <div className=' border rounded bg-primary'>
                <img className='img-fluid' src={logo} alt={name} />
                <div className='d-flex justify-content-between my-2 px-2'>
                    <h6 className='text-light'>{name}</h6>
                    <Link to={`/practices/${id}`}> <button className='btn btn-danger btn-outline-success py-0 px-4 text-white border-0 text-center'>practice &rArr;</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Course;