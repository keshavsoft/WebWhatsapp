let StartFunc = ({ inws, inClients, inChatLog }) => {
    let LocalSendObject = inClients.get(inws);

    let LocalMyChat = inChatLog.filter(element => {
        return element.id === LocalSendObject.id
    });

    inws.send(JSON.stringify({
        Type: 'myChat',
        ChatLog: LocalMyChat
    }));
};

export { StartFunc };