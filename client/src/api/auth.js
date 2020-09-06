const axios = require('axios')

export const login = async (email, password) => {
    try {
        const user = await axios.post('/api/user/login', {
            email: email,
            password: password
        })
        return user;
    } catch (err) {
        console.log(err.message);
    }
}

export const register = async (name, email, password) => {
    try {
        const user = await axios.post('/api/user/register', {
            name: name,
            email: email,
            password: password
        })
        return user;
    } catch (err) {
        console.log(err.message);
    }
}


export const logout = async (shareId) => {
    try {
        const result = await axios.get(`/api/user/logout}`)
        return result;
    } catch (err) {
        console.log(err.message);
    }
}

export const isAuthenticated = async (shareId) => {
    try {
        const result = await axios.get(`/api/user/authenticated}`)
        if (result.status !== 401)
            return result;
        else
            return { isAuthenticated: false, user: { email: "", role: "" } }
    } catch (err) {
        console.log(err.message);
    }
}