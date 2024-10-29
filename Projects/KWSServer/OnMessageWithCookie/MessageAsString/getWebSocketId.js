let StartFunc = ({ inDataAsString, inws, inClients }) => {
    let localWebSocketData=inClients.get(inws);
    inws.send(JSON.stringify({ Type: 'GetWebSocketId', webSocketId: localWebSocketData.id }));
}
export { StartFunc };