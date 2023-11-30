import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import HomePage from '../pages/HomePage';

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </div>
    );
};

export default MainRoutes;