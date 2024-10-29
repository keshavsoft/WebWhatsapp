import WebSocket from 'ws';

let StartFunc = ({ inDataAsJson, inws, inClients, inWss }) => {
    let LocalDataAsJson = inDataAsJson;

    LocalFuncChangeNameInClients({ inClients, inws, inName: LocalDataAsJson.Message });
    let LocalClientObject = inClients.get(inws);
    LocalDataAsJson.fromId = LocalClientObject.id;

    LocalFuncToAllClients({ inDataAsJson: LocalDataAsJson, inws, inWss });
};

let LocalFuncToAllClients = ({ inDataAsJson, inWss }) => {
    inWss.clients.forEach((client) => {
        console.log("1111111 : ",client.readyState);
        if (client.readyState === WebSocket.OPEN) {
            console.log("client : ",inDataAsJson);
            client.send(JSON.stringify(inDataAsJson));
        }
    });
};

let LocalFuncChangeNameInClients = ({ inClients, inws, inName }) => {
    let LocalChangedObject = inClients.get(inws);
    LocalChangedObject.Name = inName;
};

export { StartFunc };