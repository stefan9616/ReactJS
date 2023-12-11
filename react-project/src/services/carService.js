// import { request } from './requester'
const baseUrl = 'http://localhost:3030/jsonstore/cars'

export const getAll = async () => {

    const response = await fetch(baseUrl)

    try {
        const result = await response.json();
        return Object.values(result)
    } catch (error) {
        console.log(error.message);
        return {}
    }
}

export const getOne = async(racerId) =>{
    const response = await fetch(`${baseUrl}/${racerId}`);
    const result = await response.json();
    return result;
}

export const create = async(data) => {
    const result = await fetch(baseUrl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    console.log(result);
    return result;
}