import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();
    };
};

StartFunc();