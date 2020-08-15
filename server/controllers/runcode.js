encodeB64 = (str) => {
    const encodedString = Buffer.from(str).toString("base64");
    return encodedString;
};

decodeB64 = (str) => {
    const decodedString = Buffer.from(str, "base64").toString("utf8");
    return decodedString;
};

shareCode = async () => {
    const code = "import sys\na = sys.stdin.read()\nprint(a)";
    const langId = "71";
    //Code stored in Input to store in DB
    const input = this.state.code;

    try {
        //Sending Submission to API
        const token = await creteSingleSubmission(this.encodeB64(input), this.encodeB64(code), langId);
        createSharedCode(token);
    } catch (e) {
        console.log(e);
    }
};

getSharedCode = async (token) => {
    let result = await getSingleSubmission(token);
    //Retrying if in Processing or In Queue
    while (result["status"]["id"] <= 2) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        result = await getSingleSubmission(token);
    }
    //Decoding result
    if (result["stdout"]) result["stdout"] = this.decodeB64(result["stdout"]);
    if (result["stderr"]) result["stderr"] = this.decodeB64(result["stderr"]);
    if (result["error"]) result["error"] = this.decodeB64(result["error"]);
    if (result["message"]) result["message"] = this.decodeB64(result["message"]);
    if (result["compile_output"]) result["compile_output"] = this.decodeB64(result["compile_output"]);
    this.updateCode(result["stdout"]);
};

runCode = async () => {
    this.toggleIsLoading();
    const { language, code, input } = this.state;
    const langId = this.languageId[language];

    try {
        //Sending Submission to API
        const token = await creteSingleSubmission(this.encodeB64(input), this.encodeB64(code), langId);
        //Timeout 1 sec
        await new Promise((resolve) => setTimeout(resolve, 1000));
        //Fetching submission with Token-ID
        let result = await getSingleSubmission(token);
        this.setState({ result: result });
        //Retrying if in Processing or In Queue
        while (result["status"]["id"] <= 2) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            result = await getSingleSubmission(token);
        }
        this.toggleIsLoading();

        //Decoding result
        if (result["stdout"]) result["stdout"] = this.decodeB64(result["stdout"]);
        if (result["stderr"]) result["stderr"] = this.decodeB64(result["stderr"]);
        if (result["error"]) result["error"] = this.decodeB64(result["error"]);
        if (result["message"]) result["message"] = this.decodeB64(result["message"]);
        if (result["compile_output"]) result["compile_output"] = this.decodeB64(result["compile_output"]);
        //Sending Response to user
        console.log(result);
        this.setState({ result: result });
    } catch (e) {
        console.log(e);
    }
};