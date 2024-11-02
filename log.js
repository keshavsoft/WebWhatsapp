import fs from 'fs';
const CommonDataPath = "./public/data.json";

const startFunc = ({ inChatData }) => {
    let chat = inChatData;
    let oldData = fs.readFileSync(CommonDataPath);
    let oldJsonData = JSON.parse(oldData);
    oldJsonData.push(chat);

    fs.writeFileSync(CommonDataPath, JSON.stringify(oldJsonData));
};

export { startFunc };