let StartFunc = ({ inDataToClientAsJson, inws, inClients, inWss }) => {
    console.log("StartFuncSendMessageToAll : ", inDataToClientAsJson.Message);
    inWss.clients.forEach((client) => {
        // console.log("client::::", client);
        if (client !== inws && client.readyState === 1) {
            client.send(JSON.stringify({ Type: 'sendMessageToAll', Message: inDataToClientAsJson.Message })); // Customize message, extract user ID from URL
        } 
    });
}
export { StartFunc };



