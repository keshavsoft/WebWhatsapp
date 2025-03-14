let StartFunc = () => {
    console.log("this si clicked");

    // let jVarLocalSendMessageInputId = document.getElementById('SendMessageInputId');

    // webSocket.send(jVarLocalSendMessageInputId.value);
    // jFLocalSendMessage({ inMessageToSend: jVarLocalSendMessageInputId.value });
    // jVarLocalSendMessageInputId.value = "";
    // jVarLocalSendMessageInputId.focus();
};

const jFLocalSendMessage = ({ inMessageToSend }) => {
    const template = document.querySelector("#SendMessageId");
    let jVarLocalChatContentId = document.getElementById('ChatContentId');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    clone.querySelector(".chat-message").innerHTML = inMessageToSend;

    jVarLocalChatContentId.appendChild(clone);
};

export { StartFunc };