let StartFunc = ({ inClients, inSendFunc }) => {
    let LocalArray = []

    for (let [key, value] of inClients) {
        LocalArray.push(value);
    };

    // inws.send(JSON.stringify({ Type: 'returnOnlineClients', res: LocalArray }));

    inSendFunc({ inMessage: { Type: 'returnOnlineClients', res: LocalArray }, inTypeJson: true });
}
export { StartFunc };