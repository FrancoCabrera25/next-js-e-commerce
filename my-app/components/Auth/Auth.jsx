import React, {useState} from 'react';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = ( {onCloseModal, setTitleModal}) => {

    const  [showLogin, setShowLogin] = useState(true);

    const showLoginForm = () => {
        setShowLogin(true);
        setTitleModal('Iniciar Sesiòn')
    }
    const showRegisterForm = () => {
        setShowLogin(false);
        setTitleModal('Crear Cuenta');
    }

    return showLogin ? <LoginForm showRegisterForm={showRegisterForm} onCloseModal={onCloseModal}/> : <RegisterForm showLoginForm={showLoginForm}/>
};

export default Auth;
