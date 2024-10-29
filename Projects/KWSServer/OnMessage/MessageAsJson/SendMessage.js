let StartFunc = ({ inDataToClientAsJson, inws, inClients }) => {
    let LocalSendObject = inClients.get(inws);
    let toId = inDataToClientAsJson.toId;
    let toWs = Getws(inClients, toId);

    toWs.send(JSON.stringify({
        Type: 'sendMessage',
        Message: inDataToClientAsJson.Message,
        toId: toId, fromId: LocalSendObject.id
    }));
}
let Getws = (inClients, toId) => {
    for (let [key, value] of inClients.entries()) {
        if (value.id === toId)
            return key;
    };
};

export { StartFunc };