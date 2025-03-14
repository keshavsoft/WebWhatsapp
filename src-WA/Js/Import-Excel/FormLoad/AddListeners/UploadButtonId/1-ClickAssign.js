import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "UploadButtonId";
    let jVarLocalCreateFolderButtonId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCreateFolderButtonId === null === false) {
        jVarLocalCreateFolderButtonId.addEventListener("click", StartFuncButtonClickFunc);
    };
};

export { StartFunc };
