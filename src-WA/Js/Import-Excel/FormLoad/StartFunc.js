import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = () => {
    BuildBsTable();
    StartFuncAddListeners();
};

export { StartFunc };
