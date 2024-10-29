let StartFunc = ({ inDataAsJson, inws, inClients}) => {
    let LocalDataAsJson = inDataAsJson;
    let LocalChangedObject = inClients.get(inws);
    LocalChangedObject.ip = LocalDataAsJson.ip;
    inClients.set(inws, LocalChangedObject);
    // let LocalReturnObject = {};
    // LocalReturnObject.type = 'MyName';
    // LocalReturnObject.Name = LocalDataAsJson.Message;

    // inws.send(JSON.stringify(LocalReturnObject));
};

export { StartFunc };