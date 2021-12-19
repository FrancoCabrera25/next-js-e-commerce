import React, {useState, useEffect} from 'react';
import Layout from '../components/layouts/Layout';
import {useRouter} from 'next/router';
import useAuth from '../hooks/useAuth';
import ChangeNameForm from "../components/Account/ChangeNameForm";
import {getMeApi} from '../api/user';

const Account = () => {
    const router = useRouter();
    const [user, setUser] = useState(undefined);
    const {auth, logout, setReloadUser} = useAuth();

    useEffect(() => {
        (async () => {
            const response = await getMeApi(logout);
            setUser(response || null);
        })()
    }, [auth]);

    if (user === undefined) return null;
    if (!auth) {
        router.replace("/");
        return null;
    }

    return (
        <Layout className="account">
         <Configuration user={user} logout={logout} setReloadUser={setReloadUser}/>
        </Layout>
    );
};

export default Account;


function Configuration({user, logout, setReloadUser}) {
    return(
        <div className="account__config">
            <div className="title"> Configuración</div>
            <div className="data">
                <ChangeNameForm user={user} logout={logout} setReloadUser={setReloadUser}/>
            </div>
        </div>
    )
}
