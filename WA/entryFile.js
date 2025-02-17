import Whatsapp from 'whatsapp-web.js';
const { Client, LocalAuth } = Whatsapp;

import { StartFunc as StartFuncFromInwardMessage } from "./inwardMessage.js";
import { StartFunc as StartFuncFromAuthenticated } from "./authenticated.js";

const StartFunc = async ({ inClient }) => {
    let client = inClient;

    client = new Client({
        puppeteer: {
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
        authStrategy: new LocalAuth()
    });

    client.on('qr', (qr) => {
        res.end(qr);
    });

    client.on('ready', () => {
        isReady = true;
        clientInfoFunc({ inClient: client });

        console.log('client info :', Object.keys(client));

        client.getChats().then(chatData => {
            console.log('chatData!', chatData.length);
        });
    });

    client.on('message', StartFuncFromInwardMessage);
    client.on('authenticated', StartFuncFromAuthenticated);

    await client.initialize();
};

export { StartFunc };