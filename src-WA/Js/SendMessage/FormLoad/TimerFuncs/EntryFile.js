const StartFunc = () => {
    const intervalID = setInterval(myCallback, 2000, "Parameter 1", "Parameter 2");
};

function myCallback(a, b) {
    if ("UserName" in localStorage === false || localStorage.getItem("UserName") === "null") {
        let sign = prompt("Can I have your Name...");

        jFLocalUserNameToLocalStorage({ inUserName: sign });
        jFSendUserName({ inUserName: localStorage.getItem("UserName") });
    };

    jFLocalToInputNameId(localStorage.getItem("UserName"));
};

const jFSendUserName = ({ inUserName }) => {
    let jVarLocalLocation = {};
    jVarLocalLocation.Type = "ChangeName";
    jVarLocalLocation.Message = inUserName;

    webSocket.send(JSON.stringify(jVarLocalLocation));
};

const jFLocalUserNameToLocalStorage = ({ inUserName }) => {
    localStorage.setItem("UserName", inUserName);
};

let jFLocalToInputNameId = (inValue) => {
    let jVarLocalHtmlId = 'NameId';
    let jVarLocalNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalNameId === null === false) {
        jVarLocalNameId.innerHTML = inValue;
    };
};

const jFLocalSendMessage = ({ inMessage }) => {
    const template = document.querySelector("#RecieveMessageId");
    let jVarLocalChatContentId = document.getElementById('ChatContentId');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    clone.querySelector(".chat-message").innerHTML = inMessage;

    jVarLocalChatContentId.appendChild(clone);
};


export { StartFunc };
