import Whatsapp from 'whatsapp-web.js';
const { Client, LocalAuth } = Whatsapp;

import { StartFunc as StartFuncFromInwardMessage } from "./inwardMessage.js";
import { StartFunc as StartFuncFromAuthenticated } from "./authenticated.js";

import { StartFunc as StartFuncFromQrCodeGenerated } from "../qrCodeGenerated.js";
import { startFunc as clientInfoFunc, readFunc } from "../clientInfo.js";

const StartFunc = async ({ inClient, inReponse }) => {
    // let client = inClient;

    let client;

    let res = inReponse;

    client = new Client({
        puppeteer: {
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
        authStrategy: new LocalAuth()
    });

    client.on('qr', (qr) => {
        console.log("qr is generated : ", qr);

        StartFuncFromQrCodeGenerated({ inQrCodeGenerated: qr })
        // res.end(qr);
    });

    client.on('ready', () => {
        // isReady = true;
        //

        console.log('client info :', Object.keys(client));
        clientInfoFunc({ inClient: client });
        // client.getChats().then(chatData => {
        //     console.log('chatData!', chatData.length);
        // });
    });

    client.on('message', StartFuncFromInwardMessage);
    client.on('authenticated', StartFuncFromAuthenticated);
    client.on('remote_session_saved', () => {
        console.log('remote_session_saved!');
    });

    await client.initialize();
};

export { StartFunc };