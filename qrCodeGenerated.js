let CommonQrCodeGenerated;

const StartFunc = ({ inQrCodeGenerated }) => {
    CommonQrCodeGenerated = inQrCodeGenerated;
};

const GetQrCodeGenerated = () => {
    return CommonQrCodeGenerated;
};

export { StartFunc, GetQrCodeGenerated };