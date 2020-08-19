const axios = require('axios')

export const share = async (language_id, source_code) => {
    try {
        console.log("2.1 Entered share function.. langId", language_id, "sourcecode", source_code);
        const shareId = await axios.post(`/api/ide/share`, {
            language_id: language_id,
            source_code: source_code,
        })
        console.log("2.2.1 Got result from fetch API", shareId);
        return shareId;
    } catch (err) {
        console.log("2.2.2 Got Error from fetch API", err.message);
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