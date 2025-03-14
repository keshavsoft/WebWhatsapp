let StartFunc = () => {
    console.log("nnnnnnnnnnn");

    let jVarLocalSendObject = {};
    jVarLocalSendObject.Type = "WASend";
    jVarLocalSendObject.ToNumber = jFLocalMobileId();
    jVarLocalSendObject.ToMessage = jFLocalMessageId();

    webSocket.send(JSON.stringify(jVarLocalSendObject));
};

let jFLocalMobileId = () => {
    let jVarLocalMobileId = 'MobileId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalMobileId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalMessageId = () => {
    let jVarLocalMessageId = 'MessageId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalMessageId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };