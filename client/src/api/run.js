export const run = (updateIsLoading, updateOutput, languageId, code, input) => {
    updateIsLoading(true);
    fetch("/api/run/",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ languageId: languageId, code: code, input: input })
        })
        .then(res => res.json())
        .then(data => {
            updateIsLoading(false);
            updateOutput(data)
        })

}