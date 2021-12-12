import React from 'react';

const RegisterForm = ({showLoginForm}) => {
    return (
        <div>
            REGISTRO FORMULARIO
            <button onClick={showLoginForm}>ir al login</button>
        </div>
    );
};

export default RegisterForm;
