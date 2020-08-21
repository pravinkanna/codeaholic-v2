const axios = require('axios')
//https://codeaholic2.pravinkanna.me.?shareId=5f3f447a9a2b7b0afe91f75b
export const run = async (language_id, source_code, stdin) => {
    try {
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