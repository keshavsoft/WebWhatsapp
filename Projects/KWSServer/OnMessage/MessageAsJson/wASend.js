import { getClientInfo } from "../../../../clientInfo.js";

let StartFunc = ({ inws, inDataAsJson }) => {
    // let LocalSendObject = inClients.get(inws);
    const LocalClientInfo = getClientInfo();

    LocalClientInfo.sendMessage(`91${inDataAsJson.ToNumber}` + "@c.us", inDataAsJson.ToMessage).then(PromiseData => {


        console.log("vvvvvvvvvv : ", inDataAsJson, PromiseData);
    });



    // toWs.send(JSON.stringify({
    //     Type: 'myChat',
    //     ChatLog: LocalMyChat
    // }));
};

export { StartFunc };