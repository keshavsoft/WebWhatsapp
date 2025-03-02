const StartFunc = async msg => {
    const LocalReplaceUs = msg.from.replace(/@c.us/g, '');
    const LocalFromNumber = LocalReplaceUs.replace("91", '');
    const LocalFromFetch = await LocalFuncFetchData(LocalFromNumber);

    console.log("aaaaaaaaaa : ", msg.body, LocalFromFetch, LocalFromNumber, LocalFromFetch.length);

    if (LocalFromFetch.length > 0) {
        msg.reply('You are already registered with us');
    };

    if (msg.body === "ping") {
        msg.reply('pong');
    };

    if (msg.body === "hi") {
        msg.reply('Greetings from KeshavSoft');
    };
};

const LocalFuncFetchData = async (inNumber) => {
    const LocalUrl = `https://join.keshavsoft.biz/binV4/StudentNames/Search?Mobile=${inNumber}`;

    const response = await fetch(LocalUrl);
    const data = await response.json();
    return data;
};

export { StartFunc };