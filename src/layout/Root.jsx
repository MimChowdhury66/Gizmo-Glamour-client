import React from 'react';
import Nav from '../components/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <><div className='container mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div><Footer></Footer></>
    );
};

export default Root;