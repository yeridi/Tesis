import * as METHODS from '../methods';
import { baseURL } from '../config';

const URL = `${baseURL}api/v1/product`;

export const list = async () => {
    try {
        const response = await fetch(`${URL}/all`, METHODS.GET());
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}


export const creatingProduct = async (body) => {
    try {
        const response = await fetch(`${URL}/store`, METHODS.POST(body));
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}


export const showProduct = async (id) => {
    try {
        const response = await fetch(`${URL}/show/${id}`, METHODS.GET(id));
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}
