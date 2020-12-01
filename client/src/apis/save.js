const axios = require('axios')

export const save = async (title, language_id, source_code) => {
    console.log("SAVEEEEEEEE");
    try {
        const result = await axios.post('/api/user/save', {
            title: title,
            language_id: language_id,
            source_code: source_code
        })
        console.log("Saved: ", result.data);
        return result;
    } catch (err) {
        console.log(err.message);
    }
}