import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import { AuthPage } from '../../pages/AuthPage/AuthPage';
import { TestPage } from '../../pages/TestPage/TestPage';

const MainRouter: React.FC = () => {
    return (
        <Routes>
            {/* Main area */}
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/test"
                element={<TestPage />}
            />

            {/* Category area */}
            <Route
                path="/auth"
                element={<AuthPage />}
            >
                {/* <Route
                    path="/auth2"
                    element={<AuthPage />}
                /> */}
            </Route>
            {/* Redirects */}
        </Routes>
    );
};

export default MainRouter;
