let StartFunc = (event) => {
    let jVarLocalSendButtonId = document.getElementById('SendButtonId');

    if (event.key === "Enter") {
        jVarLocalSendButtonId.click();
    };
};

export { StartFunc };