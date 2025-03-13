let StartFunc = () => {
    document.getElementById("sendMessageButtonId").addEventListener("click", () => {
        let jVarLocalToNumber = document.getElementById("sendMessageInputId").value;
        let jVarLocalMessage = document.getElementById("sendCutomMessageInputId").value;
        jFLocalSendMessage(jVarLocalToNumber, jVarLocalMessage);
    });
};

const jFLocalSendMessage = (inToNumber, inMessage) => {
    let jVarLocalObjectToServer = {
        Type: 'WASend',
        ToMessage: inMessage,
        ToNumber: inToNumber
    };

    webSocket.send(JSON.stringify(jVarLocalObjectToServer));
};

StartFunc();