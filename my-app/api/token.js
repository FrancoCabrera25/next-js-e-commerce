import {TOKEN} from '../utils/constants';
import jwtDecode from "jwt-decode";

export function setToken(token) {
    localStorage.setItem(TOKEN, token);
}

export function getToken() {
    return localStorage.getItem(TOKEN);
}

export function removeToken() {
    return localStorage.removeItem(TOKEN);
}

export function hasExpiredToken(token) {
    const tokenDecode = jwtDecode(token);
    const expiredData = tokenDecode.exp * 1000;
    const currentData = new Date().getTime();

    return currentData > expiredData;

}
