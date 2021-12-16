import React, {useState} from 'react';
import {Form, Button} from 'semantic-ui-react';
import  {useFormik} from 'formik'
import * as Yup from "yup";
import  {registerApi} from '../../../api/user';
import { toast} from 'react-toastify';

const RegisterForm = ({showLoginForm}) => {
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues:initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await registerApi(formData);
            if(response?.jwt) {
                toast.success("El registro se realizo correctamente");
                showLoginForm();
            } else {
                    toast.error("Error al registrar un usuario, intentelo mas tarde");
            }
            setLoading(false);
        }
    })

    return (
            <Form className='register-form' onSubmit={formik.handleSubmit}>
                <Form.Input
                    name="name"
                    type="text"
                    placeholder="Ingrese Nombre"
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                />
                <Form.Input
                    name="lastname"
                    type="text"
                    placeholder="Ingrese Apellido"
                    onChange={formik.handleChange}
                    error={formik.errors.lastname}
                />
                <Form.Input
                    name="username"
                    type="text"
                    placeholder="Ingrese usuario"
                    onChange={formik.handleChange}
                    error={formik.errors.username}
                />
                <Form.Input
                    name="email"
                    type="text"
                    placeholder="Ingrese Email"
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                />
                <Form.Input
                    name="password"
                    type="password"
                    placeholder="Ingrese Contraseña"
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />
                <div className="actions">
                    <Button type="button" basic onClick={showLoginForm}>
                        Iniciar Sesión
                    </Button>
                    <Button type="submit" className="submit" loading={loading}>
                        Registrar
                    </Button>
                </div>
            </Form>
    );
};

export default RegisterForm;


function initialValues() {
    return {
        name: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
    }
}

function validationSchema() {
    return {
            name: Yup.string().required(true),
            lastname: Yup.string().required("El apellido es obligatorio"),
            username: Yup.string().required(true),
            email: Yup.string().email(true).required(true),
            password: Yup.string().required(true)
    }
}
