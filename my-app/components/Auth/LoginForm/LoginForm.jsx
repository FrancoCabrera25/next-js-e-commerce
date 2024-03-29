import React, {useEffect, useState} from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import  {toast} from 'react-toastify'
import {getMeApi, loginApi, resetPasswordApi} from '../../../api/user'
import useAuth from "../../../hooks/useAuth";


const LoginForm = ({showRegisterForm, onCloseModal}) => {
    const [loading,setLoading] = useState(false);
    const {auth,login, logout} = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
             setLoading(true);
             const  response = await loginApi(formData)
             if(response?.jwt){
                 login(response.jwt);
                 onCloseModal();
             }else{
                 toast.error("email o contraseña incorrectos");
             }

            setLoading(false)
        }
    })

    const resetPassword = () =>{
        formik.setErrors({});
        const validateEmail =  Yup.string().email().required();
        if (!validateEmail.isValidSync(formik.values.identifier)) {
                formik.setErrors({ identifier: true });
        }else{
            resetPasswordApi(formik.values.identifier);
        }
    }

    return (
            <Form className="login-form" onSubmit={formik.handleSubmit}>
                    <Form.Input
                        name="identifier"
                        type="text"
                        placeholder="Ingrese email"
                        onChange={formik.handleChange}
                        error={formik.errors.identifier}
                    />
                    <Form.Input
                        name="password"
                        type="password"
                        placeholder="Ingrese contraseña"
                        onChange={formik.handleChange}
                        error={formik.errors.password}
                    />
                <div className="actions">
                    <Button type="button" basic onClick={showRegisterForm} >Registrarse</Button>
                    <div>
                        <Button type="submit" className="submit" loading={loading}>Iniciar Sesión</Button>
                        <Button type="button"  onClick={resetPassword}>¿Has olvidado la contraseña?</Button>
                    </div>
                </div>

            </Form>
    );
};

export default LoginForm;


function initialValues() {
            return {
                identifier: '',
                password: '',
            }
}

function validationSchema() {
        return {
            identifier: Yup.string().email(true).required(true),
            password: Yup.string().required(true),
        }
}
