const { creteSingleSubmission, getSingleSubmission } = require('../controllers/createSubmission')

encodeB64 = (str) => {
    const encodedString = Buffer.from(str).toString("base64");
    return encodedString;
};

decodeB64 = (str) => {
    const decodedString = Buffer.from(str, "base64").toString("utf8");
    return decodedString;
};



runCode = async (langId, code, input, res) => {
    try {

        //Sending Submission to API
        const token = await creteSingleSubmission(encodeB64(input), encodeB64(code), langId);
        //Timeout 1 sec
        await new Promise((resolve) => setTimeout(resolve, 1000));
        //Fetching submission with Token-ID
        let result = await getSingleSubmission(token);
        //Retrying if in Processing or In Queue
        while (result["status"]["id"] <= 2) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            result = await getSingleSubmission(token);
        }

        //Decoding result
        if (result["stdout"]) result["stdout"] = decodeB64(result["stdout"]);
        if (result["stderr"]) result["stderr"] = decodeB64(result["stderr"]);
        if (result["error"]) result["error"] = decodeB64(result["error"]);
        if (result["message"]) result["message"] = decodeB64(result["message"]);
        if (result["compile_output"]) result["compile_output"] = decodeB64(result["compile_output"]);
        //Sending Response to user

        res.json(result);


    } catch (e) {
        console.log(e);
    }
};

exports.runCode = runCode;