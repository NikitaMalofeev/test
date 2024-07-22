import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.homePage}>
            <h1>Welcome to the Home Page</h1>
            <button
                onClick={() => {
                    navigate('/auth');
                }}
            >
                Auth
            </button>
        </div>
    );
};

export default HomePage;
