let StartFunc = ({ inws, inClients, inSendFunc }) => {
    let localWebSocketData = inClients.get(inws);
    // inws.send(JSON.stringify({ Type: 'GetWebSocketId', webSocketId: localWebSocketData.id }));

    inSendFunc({
        inTypeJson: true,
        inMessage: { Type: 'GetWebSocketId', webSocketId: localWebSocketData.id }
    });
}
export { StartFunc };