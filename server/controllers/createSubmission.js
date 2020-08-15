const rp = require('request-promise');

//Function to Create Single Submission
const creteSingleSubmission = async (stdin, src, langId) => {
    return new Promise(async (resolve, reject) => {
        try {
            //CREATING A SUBMISSION
            var options = {
                method: "POST",
                url: `https://codeaholic-api.pravinkanna.me/submissions/?base64_encoded=true`,
                headers: {
                    "content-type": "application/json",
                    accept: "application/json",
                    useQueryString: true,
                },
                body: {
                    language_id: langId,
                    source_code: src,
                    stdin: stdin,
                },
                json: true,
            };

            await rp(options, function (error, response, body) {
                if (error) throw new Error(error);
                resolve(body.token);
            });
        } catch (e) {
            console.error(e);
            reject(e.toString());
        }
    });
};

//Function to Get Single Submission
const getSingleSubmission = async (token) => {
    return new Promise(async (resolve, reject) => {
        var result = "";
        try {
            //GETTING A SUBMISSION
            var options = {
                method: "GET",
                url: `https://codeaholic-api.pravinkanna.me/submissions/${token}?base64_encoded=true`,
                headers: {
                    useQueryString: true,
                },
            };

            await rp(options, function (error, response, body) {
                if (error) throw new Error(error);
                result = JSON.parse(body);
            });

            resolve(result);
        } catch (e) {
            console.error(e);

            reject(e.toString());
        }
    });
};

exports.creteSingleSubmission = creteSingleSubmission;
exports.getSingleSubmission = getSingleSubmission;