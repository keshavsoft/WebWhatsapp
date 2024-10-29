let StartFunc = ({ inDataAsJson, inws, inClients}) => {
    let LocalDataAsJson = inDataAsJson;
    let LocalChangedObject = inClients.get(inws);
    LocalChangedObject.latitude = LocalDataAsJson.latitude;
    LocalChangedObject.longitude = LocalDataAsJson.longitude;
    inClients.set(inws, LocalChangedObject);
    // let LocalReturnObject = {};
    // LocalReturnObject.type = 'MyName';
    // LocalReturnObject.Name = LocalDataAsJson.Message;

    // inws.send(JSON.stringify(LocalReturnObject));
};

export { StartFunc };