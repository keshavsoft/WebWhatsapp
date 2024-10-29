let CommonData;
let CommonInfo;

const startFunc = ({ inClient }) => {
    CommonInfo = inClient;
    CommonData = inClient.info;
};

const readFunc = () => {
    return CommonData;
};

const getClientInfo = () => {
    return CommonInfo;
};

export { startFunc, readFunc, getClientInfo };