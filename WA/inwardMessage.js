const StartFunc = msg => {
    console.log("aaaaaaaaaa : ", msg.body, msg.from);

    if (msg.body === "ping") {
        msg.reply('pong');
    };

    if (msg.body === "hi") {
        msg.reply('Greetings from KeshavSoft');
    };
};

export { StartFunc };