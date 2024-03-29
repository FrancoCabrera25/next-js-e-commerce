import {getToken, hasExpiredToken} from '../api/token';


export async function authFetch(url, params, logout) {
    const token = getToken();

    if (!token) {
        logout();
    } else {
        if (hasExpiredToken(token)) {
            // token expirado
            logout();
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const response = await fetch(url, paramsTemp);
                return response.json();
            } catch (e) {
                return e;
            }
        }
    }
}
