import React from 'react';
import './Websitedetails.css';
const Websitedetails = () => {
    return (
        <div className='d-md-flex d-lg-flex d-xl-flex d-xxl-flex bg-light'>
            <div className='cols-md-6 cols-lg-6 cols-xl-6 cols-xxl-6 text-justify w-md-50 w-lg-50 w-xl-50 w-xxl-50 ms-md-4 ms-lg-4 pt-md-4  pt-lg-4 ms-xl-4  pt-xl-4 ms-xxl-4  pt-xxl-4 p-2'>
                <h3 className='text-primary'>Participate in quize?</h3>
                <p className='text-dark'>Here you can develop your skill.For this you need to practice and take participate in quize. The quizes are on <strong><span className='text-primary'>JavaScript, CSS3,HTML5,REACT</span></strong>   </p>

            </div>
            <div className='cols-lg-6 w-lg-50 ms-lg-5 w-100'>
                <div className='image p-lg-5'>

                </div>
            </div>
        </div>
    );
};

export default Websitedetails;