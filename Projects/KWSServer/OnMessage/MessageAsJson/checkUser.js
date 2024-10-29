let StartFunc = ({ inDataToClientAsJson, inws, inClients }) => {
    let LocalSendObject = inClients.get(inws);
    let checkId = inDataToClientAsJson.checkId;
    let toWs = Getws(inClients, checkId);
    console.log("toWs : ", checkId, inDataToClientAsJson);

    toWs.send(JSON.stringify({
        Type: 'sendMessage',
        Message: inDataToClientAsJson.Message,
        toId: checkId, fromId: LocalSendObject.id
    }));
};

let Getws = (inClients, toId) => {
    for (let [key, value] of inClients.entries()) {
        if (value.id === toId)
            return key;
    };
};

export { StartFunc };