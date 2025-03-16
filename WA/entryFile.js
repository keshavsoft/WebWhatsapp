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
        console.log('client info :', Object.keys(client), Object.keys(client.info));
        clientInfoFunc({ inClient: client });

        // client.getBatteryStatus().then(status => {
        //     console.log('Battery Status:', status);
        // });

        // client.getProfilePicUrl(client.info.wid).then(k1 => {
        //     console.log('Bakes:', k1);
        // });

        //         if (profilePicUrl) {
        //             console.log(Profile picture URL of ${message.from}: ${profilePicUrl});
        //             // Print the profile picture URL
        //             console.log(`%c `, background: url(${profilePicUrl}) no-repeat; padding-left: 100px; padding-bottom: 100px;);
        //         } else {
        //             console.log(No profile picture found for ${message.from});
        //         }

        // const profilePicUrl = await client.getProfilePicUrl();
        // console.log("profilePicUrl : ", profilePicUrl);

        // client.getChats().then(chatData => {
        //     console.log('chatData!', chatData.length);
        // });
    });

    // client.on('message', async (message) => {
    //     StartFuncFromInwardMessage(message);

    //     // Fetch user profile picture
    //     try {
    //         const profilePicUrl = await client.getProfilePicUrl(message.from);
    //         if (profilePicUrl) {
    //             console.log(Profile picture URL of ${message.from}: ${profilePicUrl});
    //             // Print the profile picture URL
    //             console.log(`%c `, background: url(${profilePicUrl}) no-repeat; padding-left: 100px; padding-bottom: 100px;);
    //         } else {
    //             console.log(No profile picture found for ${message.from});
    //         }
    //     } catch (error) {
    //         console.error(Error fetching profile picture for ${message.from}:, error);
    //     }
    // });

    client.on('message', StartFuncFromInwardMessage);
    client.on('authenticated', StartFuncFromAuthenticated);
    client.on('remote_session_saved', () => {
        console.log('remote_session_saved!');
    });

    await client.initialize();
};

export { StartFunc };