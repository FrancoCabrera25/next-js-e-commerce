import React, {useState} from 'react';
import {Form, Button} from 'semantic-ui-react';

const RegisterForm = ({showLoginForm}) => {
    return (
            <Form className='register-form'>
                <Form.Input name="name" type="text" placeholder="Nombre"/>
                <Form.Input name="lastname" type="text" placeholder="Apellido"/>
            </Form>
    );
};

export default RegisterForm;
