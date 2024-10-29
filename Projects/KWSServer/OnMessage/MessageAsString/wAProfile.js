import { readFunc } from "../../../../clientInfo.js";

let StartFunc = ({ inSendFunc, inws }) => {
    inSendFunc({
        inTypeJson: false,
        inMessage: "wAProfile"
    });
    const LocalClientInfo = readFunc();

    // inws.send(JSON.stringify(LocalClientInfo));
    inSendFunc({ inMessage: { Type: 'wAProfile', res: LocalClientInfo }, inTypeJson: true });
};

export { StartFunc };