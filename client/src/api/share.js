const axios = require('axios')

export const share = async (language_id, source_code) => {
    try {
        const shareId = await axios.post(`/api/ide/share`, {
            language_id: language_id,
            source_code: source_code,
        })
        return shareId;
    } catch (err) {
        console.log(err.message);
    }
}

export const getShare = async (shareId) => {
    try {
        const result = await axios.get(`/api/ide/share/${shareId}`)
        return result;
    } catch (err) {
        console.log(err.message);
    }
}