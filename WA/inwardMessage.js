import Whatsapp from 'whatsapp-web.js';
const { MessageMedia } = Whatsapp;

const StartFunc = async msg => {
    const LocalReplaceUs = msg.from.replace(/@c.us/g, '');
    const LocalFromNumber = LocalReplaceUs.replace("91", '');
    const LocalFromFetch = await LocalFuncFetchData(LocalFromNumber);

    console.log("aaaaaaaaaa : ", msg.body, LocalFromFetch, LocalFromNumber, LocalFromFetch.length);

    if (LocalFromFetch.length > 0) {
        msg.reply('You are already registered with us');
    } else {
        if (msg.body === "ping") {
            msg.reply('pong');
        };

        if (msg.body === "hi") {
            msg.reply('Greetings from KeshavSoft');
        };

        if (msg.body === "SendMedia") {
            const media = MessageMedia.fromFilePath('./path/to/Keshav.png');
            await msg.reply(media);
        };

        if (msg.body === "SendFromUrl") {
            const LocalMediaUrl = "https://washtex5.keshavsoft.com/assets/image%20(1)-Bo3S5UVn.png";

            const media = await MessageMedia.fromUrl(LocalMediaUrl);
            await msg.reply(media);
        };
    };
};

const LocalFuncFetchData = async (inNumber) => {
    const LocalUrl = `https://join.keshavsoft.biz/binV4/StudentNames/Search?Mobile=${inNumber}`;

    const response = await fetch(LocalUrl);
    const data = await response.json();
    return data;
};

export { StartFunc };