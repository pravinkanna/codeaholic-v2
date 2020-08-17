const axios = require('axios');
const Share = require('../models/Share')

//@description Create Single Submission
//@route POST /api/ide/
//@description Public
exports.createSubmission = async (req, res, next) => {
    try {
        const { language_id, source_code, stdin } = req.body;
        const result = await axios({
            "method": "POST",
            "url": "https://codeaholic-api.pravinkanna.me/submissions",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json",
                "useQueryString": true,
            }, "data": {
                "language_id": language_id,
                "source_code": source_code,
                "stdin": stdin,
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

//@description Get Single Submission
//@route GET /api/ide/:token
//@description Public
exports.getSubmission = async (req, res, next) => {
    try {
        const token = req.params.token;
        const result = await axios({
            "method": "GET",
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


//@description Delete Single Submission
//@route DELETE /api/ide/:token
//@description Public
exports.deleteSubmission = async (req, res, next) => {
    res.send('Delete Submission');
}

//@description Share code
//@route POST /api/ide/share/
//@description Public
exports.createShare = async (req, res, next) => {
    try {
        const share = await Share.create(req.body);
        return res.status(201).json({
            success: true,
            data: share
        })
    } catch (err) {
        console.log("Error: ", err.message);
        return res.status(500).json({
            success: false,
            data: "Server Error"
        });
    }
}