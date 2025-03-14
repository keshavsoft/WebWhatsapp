import { StartFunc as clickFunc } from "./clickFunc/Entry.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("SendButtonId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", clickFunc);
    };
};

export { StartFunc };