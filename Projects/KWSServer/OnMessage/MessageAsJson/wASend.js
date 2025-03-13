import { getClientInfo } from "../../../../clientInfo.js";

let StartFunc = ({ inws, inDataAsJson }) => {
    const toWs = inws;

    // let LocalSendObject = inClients.get(inws);
    const LocalClientInfo = getClientInfo();

    LocalClientInfo.sendMessage(`91${inDataAsJson.ToNumber}` + "@c.us", inDataAsJson.ToMessage).then(PromiseData => {
        toWs.send(JSON.stringify({
            Type: 'ChatACK',
            ChatLog: inDataAsJson
        }));
    });
};

export { StartFunc };