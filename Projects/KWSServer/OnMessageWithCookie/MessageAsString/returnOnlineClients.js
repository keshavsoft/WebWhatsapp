let StartFunc = ({ inDataAsString, inws, inClients }) => {
    let LocalArray = []

    for (let [key, value] of inClients) {
        LocalArray.push(value);
    };

    inws.send(JSON.stringify({ Type: 'returnOnlineClients', res: LocalArray }));
}
export { StartFunc };