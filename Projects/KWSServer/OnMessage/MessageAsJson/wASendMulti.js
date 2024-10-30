import { getClientInfo } from "../../../../clientInfo.js";

let StartFunc = ({ inws, inDataAsJson }) => {
    let jVarLocalDataArray = inDataAsJson.NumbersArray;

    // let LocalSendObject = inClients.get(inws);
    const LocalClientInfo = getClientInfo();

    console.log("vvvvvvvvvv : ", jVarLocalDataArray, getClientInfo);

    jVarLocalDataArray.forEach(element => {
        LocalClientInfo.sendMessage(`91${element.Mobile}` + "@c.us", inDataAsJson.ToMessage).then();
    });

    // toWs.send(JSON.stringify({
    //     Type: 'myChat',
    //     ChatLog: LocalMyChat
    // }));
};

export { StartFunc };