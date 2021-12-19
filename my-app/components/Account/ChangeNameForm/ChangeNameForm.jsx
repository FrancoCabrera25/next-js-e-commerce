import React, {useState} from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik}  from 'formik';
import * as Yup from  "yup";
import {toast} from "react-toastify";
import { updateApi} from '../../../api/user';

const ChangeNameForm = ({user, logout, setReloadUser}) => {
    console.log('user', user);
    const [loading, setLoading] = useState(false);
        const formik = useFormik({
            initialValues: initialValues(user.username),
            onSubmit: async (formData) => {

                   setLoading(true);
                setReloadUser(true);
                   // const response = await updateApi(user.id,formData,logout);
                   // console.log('response', response);
                   // if(response?.error){
                   //     toast.error('error al actualizar');
                   // }else{
                   //     toast.success('Actualizado correctamente');
                   // }
                   setLoading(false);
            }
        })

    return (
        <div className="change-name-form">
            <h4>Cambia tu nombre y apellido</h4>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}/>
                </Form.Group>
                <Button className="submit" type="submit" loading={loading}>Actualizar</Button>
            </Form>
        </div>
    );
};

export default ChangeNameForm;


function initialValues(username) {
    return {
        username: username || '',
    }
}
