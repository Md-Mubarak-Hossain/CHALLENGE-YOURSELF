import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ topic }) => {
    const { id, name, logo, } = topic;
    return (
        <div className='p-2'>
            <div className='bg-light border rounded'>
                <img className='img-fluid' src={logo} alt={name} />
                <div className='d-flex justify-content-between my-2 px-2'>
                    <h5>{name}</h5>
                    <Link to={`/practices/${id}`}> <button className='btn btn-primary btn-outline-danger py-0 text-white border-0 text-center'>practice</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Course;