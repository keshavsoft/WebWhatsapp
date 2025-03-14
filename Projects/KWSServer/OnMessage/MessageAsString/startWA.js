// import { readFunc } from "../../../../clientInfo.js";
import { StartFunc as StartFuncFromWA } from "../../../../WA/entryFile.js";

let StartFunc = async ({ inSendFunc, inws }) => {
    await StartFuncFromWA({});
};

export { StartFunc };