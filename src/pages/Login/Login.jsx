import Layout from '../../Layout';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import LoginImg from '../../../public/img/login.png';
import { useState } from 'react';
import { Banner } from '../../components/Banner/Banner';
import { ERROR_BANNER } from '../../components/Banner/Banner.config';

import { UserAuth } from '../../context/AuthContext';

import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../components/Spinner/Spinner';
import { LoginForm } from './LoginForm';

import {
    FIREBASE_USER_NOT_FOUND_MESSAGE,
    USER_NOT_FOUND_MESSAGE,
    INVALID_LOGIN_CREDENTIALS_ERROR_MESSAGE,
} from './Login.config';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showSpinner, setShowSpinner] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const { signIn } = UserAuth();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        setLoginError(null);
        try {
            setShowSpinner(true);
            await signIn(email, password);
            navigate('/');
        } catch (e) {
            setShowSpinner(false);
            if (e.message === FIREBASE_USER_NOT_FOUND_MESSAGE) {
                setLoginError(USER_NOT_FOUND_MESSAGE);
            } else {
                setLoginError(INVALID_LOGIN_CREDENTIALS_ERROR_MESSAGE);
            }
        }
    };

    return (
        <Layout>
            <div className="flex flex-col items-center">
                {showSpinner && <div className="mb-6"><Spinner /></div>}
                {!showSpinner && loginError && (
                    <Banner
                        message={loginError}
                        bannerType={ERROR_BANNER}
                        className="mb-6 w-2/6"
                    />
                )}
                <div className="w-1/5">
                    <img src={LoginImg} />
                </div>
                <PageTitle title={'Login'} className={'text-center'} />
                <LoginForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                />
            </div>
        </Layout>
    );
};

export default Login;
