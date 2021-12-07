import * as METHODS from '../methods';
import { baseURL } from '../config';

const URL = `${baseURL}`;

export const list = async () => {
    try {
        const response = await fetch(`${URL}`, METHODS.GET());
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

