const axios = require('axios')

export default {
    login: async (email, password) => {
        try {
            const user = await axios.post('/api/user/login', {
                email: email,
                password: password
            })
            return user;
        } catch (err) {
            console.log(err.message);
        }
    },

    register: async (name, email, password) => {
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

    },

    logout: async () => {
        try {
            const result = await axios.get(`/api/user/logout}`)
            return result;
        } catch (err) {
            console.log(err.message);
        }
    },

    isAuthenticated: async () => {
        try {
            const result = await axios.get(`/api/user/authenticated`)
            console.log(result);
            if (result.status !== 401)
                return result;
            else
                return { isAuthenticated: false, user: { email: "", role: "" } }
        } catch (err) {
            console.log(err.message);
            return { isAuthenticated: false, user: { email: "", role: "" } }

        }
    }


}
