import { JSONFilePreset } from 'lowdb/node'

const StartFunc = async msg => {
    const defaultData = [];
    const db = await JSONFilePreset('Data/inwards.json', defaultData)

    console.log("aaaaaaaaaa : ", db.data);

    await db.update(({ posts }) => posts.push('hello world'));

    console.log("bbb : ", db.data);
};

StartFunc().then();