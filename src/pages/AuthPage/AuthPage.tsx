import Login from '../../features/user/Login/Login';
import Register from '../../features/user/Register/Register';
import styles from './styles.module.scss';

export const AuthPage = () => {
    return (
        <div className={styles.AuthPage}>
            <Register />
            <Login />
        </div>
    );
};
