import { StartFunc as clickFunc } from "./clickFunc/Entry.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("IsStudentYesId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", clickFunc);
    };
};

export { StartFunc };