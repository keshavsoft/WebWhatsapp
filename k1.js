import Whatsapp from 'whatsapp-web.js'
// const { Client, LocalAuth } = Whatsapp
const { Client, LocalAuth } = Whatsapp;

// import { Client, LocalAuth } from 'whatsapp-web.js';
import { startFunc as clientInfoFunc, readFunc } from "./clientInfo.js";

let client;
let isReady = false;

client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    // const k1 = client["_events"];

    // console.log('QR Code received:', qr, k1.ready, Object.keys(client), Object.keys(client["_events"]));

    res.end(qr);
});

client.on('ready', () => {
    isReady = true;
    clientInfoFunc({ inClient: client });

    console.log('client info :', Object.keys(client));
    // console.log('Client is ready!', client.getChats());

    client.getChats().then(chatData => {
        console.log('chatData!', chatData.length);

        // fs.writeFileSync(CommonDataPath, JSON.stringify(chatData));
    });

    // console.log('chat', Object.keys(chat), chat.name, chat.id, Object.keys(chat.lastMessage), chat.lastMessage.from, chat.lastMessage.to, chat.lastMessage.body);

});

client.on('message', () => {

});

client.on('authenticated', (session) => {
    console.log("authenticated : ");

});

client.initialize();
