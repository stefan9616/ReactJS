const baseUrl = `http://localhost:3030/users`

export const login = async (data) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if(response.status === 403){
        alert('Username or password not match')
    }
    return result;
}

export const register = async(data) => {
    const response = await fetch(`${baseUrl}/register`, {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    const result = await response.json();
    return result;
}

export const logout = async() =>{
    const response = await fetch(`${baseUrl}/logout`);
    const result = await response.json();
    return result;
}