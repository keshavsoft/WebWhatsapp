let CommonWs;

const StartFunc = ({ inWs }) => {
    CommonWs = inWs;
};

const ReturnWs = () => {
    return CommonWs;
};

export { StartFunc, ReturnWs };