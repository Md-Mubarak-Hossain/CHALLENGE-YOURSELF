import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='grid1'>
            <h3>Challenge Yourself</h3>
            <div className='grid2'>
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statchart'>StatChart</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </div>

        </div>
    );
};

export default Header;