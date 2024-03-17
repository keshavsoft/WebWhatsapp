import { Client } from 'whatsapp-web.js';

const client = new Client();

client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});
client.on('auth_failure', msg => {
    // Fired if session restore was unsuccessful
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('message_create', async (msg) => {
    // Fired on all message creations, including your own
    if (msg.fromMe) {
        console.log("aaaaaaaaaaaaa : ", msg.body);
        // do stuff here
    }

    // Unpins a message
    if (msg.fromMe && msg.body.startsWith('!unpin')) {
        const pinnedMsg = await msg.getQuotedMessage();
        if (pinnedMsg) {
            // Will unpin a message
            const result = await pinnedMsg.unpin();
            console.log(result); // True if the operation completed successfully, false otherwise
        }
    }
});

client.on('ready', () => {
    console.log('Client is ready!');
    k1().then();
});

let k1 = async () => {
    let chat_activos = await client.getChats();
  
    for (const n_chat of chat_activos) {

        var n_id = n_chat.id;
        let mensajes_verificar = await n_chat.fetchMessages();

        for (const n_chat_mensaje of mensajes_verificar) {
            console.log("chat_activos : ", n_chat_mensaje.body);

            // if (!n_chat_mensaje.isGroup) {
            //     es_grupo = 'N';
            // } else {
            //     es_grupo = 'S';
            // }
        }
    }
};

client.on('message', msg => {
    console.log("aa : ", msg.from, msg.body);

    if (msg.body === '!ping') {
        msg.reply('pong');
    };

    if (msg.body === 'hai') {
        msg.reply('hello');
    };
});

client.on('call', async (call) => {
    console.log('Call received, rejecting. GOTO Line 261 to disable', call);
    if (rejectCalls) await call.reject();
    await client.sendMessage(call.from, `[${call.fromMe ? 'Outgoing' : 'Incoming'}] Phone call from ${call.from}, type ${call.isGroup ? 'group' : ''} ${call.isVideo ? 'video' : 'audio'} call. ${rejectCalls ? 'This call was automatically rejected by the script.' : ''}`);
});

client.on('qr', (qr) => {
    console.log(qr);
});

client.initialize();
