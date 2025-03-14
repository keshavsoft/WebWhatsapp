let StartFunc = ({ inDataToSend, inDataType }) => {
    jFLocalShowMessage({ inMessage: inDataToSend });

    if (inDataType) {
        webSocket.send(JSON.stringify(inDataToSend));
    } else {
        webSocket.send(inDataToSend);
    };
};

const jFLocalShowMessage = ({ inMessage }) => {
    const template = document.querySelector("#RecieveMessageId");
    let jVarLocalChatContentId = document.getElementById('ChatContentId');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    clone.querySelector(".chat-message").innerHTML = inMessage;

    jVarLocalChatContentId.appendChild(clone);
};

export { StartFunc };