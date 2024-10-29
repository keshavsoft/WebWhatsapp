import { StartFunc as StartFuncreturnOnlineClients } from "./returnOnlineClients.js";
import { StartFunc as StartFuncGetWebSocketId } from "./getWebSocketId.js";
import { StartFunc as StartFuncreturnOnlineClientsWOMe } from "./returnOnlineClientsWOMe.js";
import { StartFunc as myChat } from "./myChat.js";
import { StartFunc as myPhone } from "./myPhone.js";
import { StartFunc as wAProfile } from "./wAProfile.js";

let StartFunc = ({ inDataAsString, inws, inClients, inChatLog, inSendFunc }) => {
    let LocalDataAsSting = inDataAsString;

    if (LocalDataAsSting === "returnOnlineClients") {
        StartFuncreturnOnlineClients({ inDataAsString: LocalDataAsSting, inws: inws, inClients, inSendFunc });
    };

    if (LocalDataAsSting === "GetWebSocketId") {
        StartFuncGetWebSocketId({ inDataAsString: LocalDataAsSting, inws, inClients, inSendFunc });
    };

    if (LocalDataAsSting === "returnOnlineClientsWOMe") {
        StartFuncreturnOnlineClientsWOMe({ inDataAsString: LocalDataAsSting, inws: inws, inClients: inClients });
    };

    if (LocalDataAsSting === "myChat") {
        myChat({ inChatLog, inws: inws, inClients: inClients });
    };

    if (LocalDataAsSting === "myPhone") {
        myPhone({ inSendFunc });
    };

    if (LocalDataAsSting === "WAProfile") {
        wAProfile({ inSendFunc, inws });
    };

    LocalFuncAiChat({ inDataAsString, inws, inClients, inChatLog, inSendFunc });
};

const LocalFuncAiChat = ({ inDataAsString, inws, inClients, inChatLog, inSendFunc }) => {
    let LocalSendObject = inClients.get(inws);

    let LocalLastFind = inChatLog.findLast(element => {
        return element.id === LocalSendObject.id && element.InOut === "Out";
    });
    // console.log("ahhhh : ", LocalLastFind);

    switch (LocalLastFind.data.Type) {
        case "IsStudent":
            switch (inDataAsString) {
                case "Yes":
                    inSendFunc({ inMessage: "YourName" });

                    break;
                default:
                    switch (inDataAsString) {
                        case "Hai":
                        case "hai":
                            console.log("aaaaaaaaaaaaaaaaa");

                            inSendFunc({ inMessage: "Hello" });

                            break;
                        default:
                            break;
                    }; break;
            }; break;
        default:
            switch (inDataAsString) {
                case "Hai":
                case "hai":
                    inSendFunc({ inMessage: "Hello" });

                    break;
                default:
                    break;
            }; break;
    };
};

export { StartFunc };