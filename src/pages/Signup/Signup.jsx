import Layout from '../../Layout';
import { PageTitle } from '../../components/PageTitle/PageTitle';

import SignupImg from '../../../public/img/signup.png';
import { useState } from 'react';
import { Banner } from '../../components/Banner/Banner';
import {
    ERROR_BANNER,
    SUCCESS_BANNER,
} from '../../components/Banner/Banner.config';

import { UserAuth } from '../../context/AuthContext';
import { getAuth, updateProfile } from 'firebase/auth';

import { Spinner } from '../../components/Spinner/Spinner';

import { SignupForm } from './SignupForm';

import {
    PASSWORD_LEN_ERROR_MESSAGE,
    ACCOUNT_CREATED_SUCCESS_MESSAGE,
    FIREBASE_EMAIL_EXISTS_ERROR_MESSAGE,
    EMAIL_EXISTS_ERROR_MESSAGE,
} from './Signup.config';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showSpinner, setShowSpinner] = useState(false);
    const [signupError, setSignupError] = useState(null);
    const [signupSuccess, setSignupSuccess] = useState(null);

    const auth = getAuth();
    const { createUser } = UserAuth();

    const handleSubmit = async e => {
        e.preventDefault();
        setSignupError(null);
        setSignupSuccess(null);
        try {
            if (password.length < 6) {
                setSignupError(PASSWORD_LEN_ERROR_MESSAGE);
            } else {
                setShowSpinner(true);
                await createUser(email, password);
                await updateProfile(auth.currentUser, {
                    displayName: email,
                });
                setShowSpinner(false);
                setSignupError(null);
                setSignupSuccess(ACCOUNT_CREATED_SUCCESS_MESSAGE);
                setEmail('');
                setPassword('');
            }
        } catch (e) {
            if (e.message === FIREBASE_EMAIL_EXISTS_ERROR_MESSAGE) {
                setShowSpinner(false);
                setSignupError(() => EMAIL_EXISTS_ERROR_MESSAGE);
            }
        }
    };

    return (
        <Layout>
            <div className="flex flex-col mt-6 items-center">
                <div className="mb-6">{showSpinner && <Spinner />}</div>
                {signupError && (
                    <Banner
                        message={signupError}
                        bannerType={ERROR_BANNER}
                        className="mb-10 w-2/6"
                    />
                )}
                {signupSuccess && (
                    <Banner
                        message={signupSuccess}
                        bannerType={SUCCESS_BANNER}
                        className="mb-10 w-2/6"
                    />
                )}
                <div className="w-1/5">
                    <img src={SignupImg} />
                </div>
                <PageTitle title={'Sign Up'} className={'text-center'} />
                <SignupForm
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

export default Signup;
