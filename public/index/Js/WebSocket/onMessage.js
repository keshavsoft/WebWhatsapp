let StartFunc = (event) => {
    try {
        let jVarLocalParse = JSON.parse(event.data);
        console.log("jVarLocalParse : ", jVarLocalParse);
        switch (jVarLocalParse?.Type) {
            case "wAProfile":
                wAProfile({ inData: jVarLocalParse.res });
                break;
            case "QrCodeGenerated":
                jFLocalHandleQrCode({ inQrReceived: jVarLocalParse.res });
                break;
            default:
                break;
        };
    } catch (error) {
        // jFLocalShowMessage({ inMessage: event.data });
    };
};

let jFLocalToInputUserNameId = (inValue) => {
    let jVarLocalHtmlId = 'UserNameId';
    let jVarLocalUserNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalUserNameId === null === false) {
        jVarLocalUserNameId.innerHTML = inValue;
    };
};

let jFLocalToInputMobileNumberId = (inValue) => {
    let jVarLocalHtmlId = 'MobileNumberId';
    let jVarLocalMobileNumberId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalMobileNumberId === null === false) {
        jVarLocalMobileNumberId.innerHTML = inValue;
    };
};

const wAProfile = ({ inData }) => {
    jFLocalToInputUserNameId(inData.pushname);
    jFLocalToInputMobileNumberId(inData.me.user);
};

const jFLocalHandleQrCode = ({ inQrReceived }) => {
    console.log("inQrReceived : ", inQrReceived);

    if (inQrReceived === undefined === false) {
        jFCreateQrCode({ inQrCode: inQrReceived });
    };
};

let jFCreateQrCode = ({ inQrCode }) => {
    var canvas = document.getElementById("CanvasId");
    canvas.height = 1;
    canvas.width = 1;
    canvas.style.visibility = 'hidden';

    // Convert the options to an object.
    let opts = {};

    // Finish up the options
    opts.text = inQrCode;
    opts.bcid = "qrcode";
    opts.scaleX = 2;
    opts.scaleY = 2;
    opts.rotate = "N";

    // Draw the bar code to the canvas
    try {
        bwipjs.toCanvas(canvas, opts);
        canvas.style.visibility = 'visible';
    } catch (e) {
        console.log("error : ", e);

        return;
    };
};

export { StartFunc };