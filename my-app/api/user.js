import {URL_BASE} from '../utils/constants';
import {authFetch}  from '../utils/fetch';

export async function  registerApi(formData){
      try {
            const url = `${URL_BASE}/api/auth/local/register`;
            const params= {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            }
            const response = await fetch(url,params);
            return await response.json();
      }
      catch (e) {
              console.log(e)
              return null
      }
}

export async function loginApi(formData) {
    try {
        const url = `${URL_BASE}/api/auth/local`;
        const params= {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(url,params);
        return await response.json();

    }catch (e){

    }
}

export async function resetPasswordApi(email){
    try {
        const url = `${URL_BASE}/api/auth/forgot-password`;
        const params= {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email})
        }
        const response = await fetch(url,params);
        return await response.json();
    }catch (e){

    }
}

export async function getMeApi(logout){
        try{
         const url = `${URL_BASE}/api/users/me`;
         const result = await authFetch(url,null,logout);
         return result ? result : null;
        }catch (e){

        }
}

export async function updateApi(idUser, data,logout){
    try{
        const url = `${URL_BASE}/api/users/${idUser}`;
        const params= {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
        const result = await authFetch(url,params,logout);
        return result ? result : null;
    }catch (e){

    }
}
