import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div className='p-5'>
            <Product></Product>
        </div>

    );
};

export default Home;