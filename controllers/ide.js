const axios = require('axios');
const Share = require('../models/Share');

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

//@description Share code
//@route POST /api/ide/share/:id
//@description Public
exports.getShare = async (req, res, next) => {
    try {
        const id = req.params.id;
        //If ID lenght is not 24
        if (id.length !== 24) {
            return res.status(404).json({
                success: false,
                error: "No Shared Code Found"
            })
        }
        const share = await Share.findById(id);
        //If ID not in DB
        if (!share) {
            return res.status(404).json({
                success: false,
                error: "No Shared Code Found"
            })
        }
        //Success Response
        return res.status(200).json({
            success: true,
            data: share
        })

    } catch (err) {
        console.log("Error:", err.message);
        return res.status(500).json({
            success: false,
            data: "Server Error"
        });
    }
}

//@description Share code
//@route POST /api/ide/share/
//@description Public
exports.createShare = async (req, res, next) => {
    try {
        //Creating entry in DB
        const share = await Share.create(req.body);
        return res.status(201).json({
            success: true,
            data: share
        })

    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            console.log("Error:", err.message);
            return res.status(500).json({
                success: false,
                data: "Server Error"
            });
        }

    }
}

//@description Delete Shared code
//@route DELETE /api/ide/share/
//@description Public
exports.deleteShare = async (req, res, next) => {
    try {
        const id = req.params.id;
        //If ID lenght is not 24
        if (id.length !== 24) {
            return res.status(404).json({
                success: false,
                error: "No Shared Code Found"
            })
        }
        const deleteShare = await Share.findByIdAndDelete(id);
        if (!deleteShare) {
            return res.status(404).json({
                success: false,
                error: "No Shared Code Found"
            })
        }
        return res.status(200).json({
            success: true,
            data: "Delete success"
        })

    } catch (err) {
        console.log("Error:", err);
        return res.status(500).json({
            success: false,
            data: "Server Error"
        });
    }
}