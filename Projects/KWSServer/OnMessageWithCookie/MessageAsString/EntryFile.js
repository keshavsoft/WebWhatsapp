import { StartFunc as StartFuncreturnOnlineClients } from "./returnOnlineClients.js";
import { StartFunc as StartFuncGetWebSocketId } from "./getWebSocketId.js";
import { StartFunc as StartFuncreturnOnlineClientsWOMe } from "./returnOnlineClientsWOMe.js";

let StartFunc = ({ inDataAsString, inws, inClients }) => {
    let LocalDataAsSting = inDataAsString;

    if (LocalDataAsSting === "returnOnlineClients") {
        StartFuncreturnOnlineClients({ inDataAsString: LocalDataAsSting, inws: inws, inClients: inClients });
    };

    if (LocalDataAsSting === "GetWebSocketId") {
        StartFuncGetWebSocketId({ inDataAsString: LocalDataAsSting, inws: inws, inClients: inClients });
    };

    if (LocalDataAsSting === "returnOnlineClientsWOMe") {
        StartFuncreturnOnlineClientsWOMe({ inDataAsString: LocalDataAsSting, inws: inws, inClients: inClients });
    };
};

export { StartFunc };