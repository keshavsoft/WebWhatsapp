const StartFunc = () => {
    // let intervalId;

    const jFLocalFuncToRun = () => {
        console.log("webSocket: ", webSocket);

        webSocket.send("WAProfile");
    };

    if (!KSIntervalId) {
        KSIntervalId = setInterval(jFLocalFuncToRun, 1000);
    };

    console.log("aaaaaaa: ", KSIntervalId);
};

const StartFunc_Old = () => {
    let intervalId;

    const jFLocalFuncToRun = () => {
        webSocket.send("WAProfile");
    };

    if (!intervalId) {
        intervalId = setInterval(jFLocalFuncToRun, 1000);
    };

    console.log("aaaaaaa: ", intervalId);
};

StartFunc();