import { StartFunc as keypress } from "./keypress/Entry.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("SendMessageInputId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("keypress", keypress);
    };
};

export { StartFunc };