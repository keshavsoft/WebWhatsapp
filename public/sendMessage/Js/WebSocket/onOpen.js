let StartFunc = (event) => {
    // event.currentTarget.send("GetQrCode");
    event.currentTarget.send("WAProfile");
    // webSocket.send("GetQrCode");
};

export { StartFunc };