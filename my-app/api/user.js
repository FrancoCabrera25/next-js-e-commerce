import {URL_BASE} from '../utils/constants';

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
