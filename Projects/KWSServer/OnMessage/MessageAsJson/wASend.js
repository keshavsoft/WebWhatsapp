import { getClientInfo } from "../../../../clientInfo.js";

let StartFunc = ({ inws, inDataAsJson }) => {
    // let LocalSendObject = inClients.get(inws);
    const LocalClientInfo = getClientInfo();
    console.log("vvvvvvvvvv : ", inDataAsJson);

    LocalClientInfo.sendMessage(`91${inDataAsJson.ToNumber}` + "@c.us", inDataAsJson.ToMessage).then();

    // toWs.send(JSON.stringify({
    //     Type: 'myChat',
    //     ChatLog: LocalMyChat
    // }));
};

export { StartFunc };