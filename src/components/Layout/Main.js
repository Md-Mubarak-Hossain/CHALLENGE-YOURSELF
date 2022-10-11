import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Websitedetails from '../Websitedetails/Websitedetails';
import './Main.css';

const Main = () => {
    return (
        <div>
            <div className='main-container'>
                <Header></Header>
                <Websitedetails></Websitedetails>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;