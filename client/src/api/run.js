const axios = require('axios')
export const run = async (language_id, source_code, stdin) => {
    try {
        const result = await axios.post('/api/ide', {
            language_id: language_id,
            source_code: source_code,
            stdin: stdin
        })
        // if(result.data.status.id )
        return result;
    } catch (err) {
        console.log(err.message);
    }
}