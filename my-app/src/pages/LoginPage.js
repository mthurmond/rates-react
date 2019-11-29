import React from 'react';
import LoginForm from '../components/LoginForm';
import DismissibleAlert from '../components/DismissibleAlert';

const LoginPage = () => {
    
    return (

        <>

            <DismissibleAlert />

            <h1 class="header mt-5 mb-3">Log In</h1>

            <LoginForm />

        </>

    )
}

export default LoginPage;