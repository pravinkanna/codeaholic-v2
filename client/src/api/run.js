const axios = require('axios')
export const run = async (language_id, source_code, stdin) => {
    try {
        console.log(language_id);
        const result = await axios.post('/api/ide', {
            language_id: language_id,
            source_code: source_code,
            stdin: stdin
        })
        return result;
    } catch (err) {
        console.log(err.message);
    }
}