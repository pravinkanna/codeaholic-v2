const axios = require('axios');


//@description Run Single Submission
//@route POST /api/ide/
//@description Public
exports.runSubmission = async (req, res, next) => {
    const { language_id, source_code, stdin } = req.body;
    console.log("2. Got API request ide.js controller", language_id, source_code, stdin);
    try {
        const token = await createSubmission(language_id, source_code, stdin);
        const result = await getSubmission(token);
        //If API Call Limit Exceecd
        if (result === -1) {
            return res.status(500).json({
                success: false,
                data: "Server Error"
            });
        }
        console.log("3. Returnin APi Response", result);
        return res.status(200).json({
            success: true,
            length: result.length,
            data: result
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            data: "Server Error"
        });
    }

}

//@description Delete Single Submission
//@route DELETE /api/ide/:token
//@access Public
exports.deleteSubmission = async (req, res, next) => {
    try {
        const token = req.params.token;
        const result = await axios({
            "method": "DELETE",
            "url": `https://codeaholic-api.pravinkanna.me/submissions/${token}`,
            "headers": {
                "content-type": "application/octet-stream",
                "useQueryString": true
            }
        })
        return res.status(200).json({
            success: true,
            length: result.length,
            data: result.data
        });

    } catch (err) {
        console.log("Error:", err.message);
        return res.status(500).json({
            success: false,
            data: "Server Error"
        });
    }
}

//Encode BASE64
const encodeB64 = (plainStr) => {
    const encodedStr = Buffer.from(plainStr, "utf-8").toString("base64");
    return encodedStr;
};

//Decode BASE64
const decodeB64 = (encodedStr) => {
    const decodedStr = Buffer.from(encodedStr, "base64").toString("utf-8");
    return decodedStr;
};


const createSubmission = async (language_id, source_code, stdin) => {
    try {
        const result = await axios({
            "method": "POST",
            "url": "https://codeaholic-api.pravinkanna.me/submissions?base64_encoded=true",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json",
                "useQueryString": true,
            }, "data": {
                "language_id": language_id,
                "source_code": encodeB64(source_code),
                "stdin": encodeB64(stdin),
            }
        })
        return result.data.token;
    } catch (err) {
        console.log("Error:", err.message);
    }
}

const getSubmission = async (token) => {
    try {
        let statusID = -1, result;
        //Restricting calling API more than 10 times
        for (let count = 0; count < 10 && statusID <= 2; count++) {
            result = await axios({
                "method": "GET",
                "url": `https://codeaholic-api.pravinkanna.me/submissions/${token}?base64_encoded=true`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "useQueryString": true
                }
            })
            statusID = result.data.status.id;
        }
        if (statusID > 2) {
            result = result.data
            if (result["stdout"]) result["stdout"] = decodeB64(result["stdout"]);
            if (result["stderr"]) result["stderr"] = decodeB64(result["stderr"]);
            if (result["compile_output"]) result["compile_output"] = decodeB64(result["compile_output"]);
            if (result["message"]) result["message"] = decodeB64(result["message"]);
            return result;
        } else {
            return -1;
        }
    } catch (err) {
        console.log("Error:", err.message);
    }

}