import { startFunc as StartFuncFromLog } from "../log.js";

const StartFunc = async msg => {
    if (msg.body === "ping") {
        msg.reply('pong');
    };

    if (msg.body === "hi") {
        msg.reply('Greetings from KeshavSoft...');
    };

    let chat = await msg.getChat();

    StartFuncFromLog({ inChatData: chat });
};

export { StartFunc };