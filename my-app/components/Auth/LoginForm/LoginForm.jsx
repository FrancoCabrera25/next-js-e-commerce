import React from 'react';

const LoginForm = ({showRegisterForm}) => {
    return (
        <div>
                LOGIN FORM
            <button onClick={showRegisterForm}>ir al registro</button>
        </div>
    );
};

export default LoginForm;
