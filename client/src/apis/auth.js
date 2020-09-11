const axios = require('axios')

export default {
    login: async (email, password) => {
        let user
        try {
            user = await axios.post('/api/user/login', {
                email: email,
                password: password,
                role: "user"
            })
            return user;
        } catch (err) {
            if (err.response.status === 401)
                return err.response
            else
                console.log(err.message);
        }
    },

    register: async (name, email, password) => {
        try {
            const user = await axios.post('/api/user/register', {
                name: name,
                email: email,
                password: password,
                role: "user"
            })
            return user;
        } catch (err) {
            if (err.response.status === 400)
                return err.response
            console.log(err.message);
        }

    },

    logout: async () => {
        try {
            const result = await axios.get(`/api/user/logout`)
            return result;
        } catch (err) {
            console.log(err.message);
        }
    },

    isAuthenticated: async () => {
        try {
            const result = await axios.get(`/api/user/authenticated`)
            if (result.status !== 401)
                return result.data;
            else
                return { isAuthenticated: false, user: { name: "", email: "", role: "" } }
        } catch (err) {
            if (err.response.status === 401)
                return { isAuthenticated: false, user: { name: "", email: "", role: "" } }
            else
                console.log(err.message);


        }
    }


}
