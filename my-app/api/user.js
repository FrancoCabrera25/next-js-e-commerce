import  {URL_BASE} from '../utils/constants';

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
            const result = await  response.json();
            console.log(result);
      }
      catch (e) {
              console.log(e)
              return null
      }
}
