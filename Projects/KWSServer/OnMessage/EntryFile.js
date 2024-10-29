import { StartFunc as CommonMessageAsJson } from "./MessageAsJson/EntryFile.js";
import { StartFunc as CommonMessageAsString } from "./MessageAsString/EntryFile.js";

let StartFunc = ({ inData, inws, inClients, inWss, inChatLog, inSendFunc }) => {
    let LocalData = inData;

    try {
        let LocalDataAsJson = JSON.parse(LocalData);

        CommonMessageAsJson({ inDataAsJson: LocalDataAsJson, inws, inClients, inWss, inChatLog });

        return;
    } catch (error) {
    };

    CommonMessageAsString({ inDataAsString: LocalData.toString(), inws, inClients, inChatLog, inSendFunc });

    // const LocalFuncLogMessage = ({ inId, inMessage, inTypeJson }) => {
    //     CommonChatLog.push({ id: inId, data: inMessage, InOut: "Out" });

    //     if (inTypeJson) {
    //         ws.send(JSON.stringify(inMessage));
    //     } else {
    //         ws.send(inMessage);
    //     };
    // };
};

export { StartFunc };