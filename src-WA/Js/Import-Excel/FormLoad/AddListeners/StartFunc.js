import { StartFunc as formFile } from "./formFile/EntryFile.js";
import { StartFunc as UploadButtonId } from "./UploadButtonId/1-ClickAssign.js";

let StartFunc = () => {
    formFile();
    UploadButtonId();
};

export { StartFunc };