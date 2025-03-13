import { StartFunc as onOpen } from "./onOpen.js";
import { StartFunc as onMessage } from "./onMessage.js";

let jVarLocalHostName = window.location.host;
let jVarLocalUrlForWS;

if (location.protocol === "https:") {
    jVarLocalUrlForWS = "wss://" + jVarLocalHostName;
} else {
    jVarLocalUrlForWS = "ws://" + jVarLocalHostName;
}

export let webSocket;

let StartFunc = () => {
    jFLocalEstablishWebSocket();
};

let jFLocalEstablishWebSocket = () => {
    webSocket = new WebSocket(jVarLocalUrlForWS);

    webSocket.onopen = onOpen;
    webSocket.onmessage = onMessage;

    webSocket.onclose = function (e) {
        console.log('WebSocket is closed now.', e.reason);
    };

    webSocket.onerror = function (err) {
        console.error('WebSocket encountered error: ', err.message, 'Closing socket');
        webSocket.close();
    };
};

StartFunc();