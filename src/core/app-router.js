import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {Home, About} from '../components/index';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>

        </>
    )
}

export default AppRouter;