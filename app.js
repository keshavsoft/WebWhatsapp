import express from 'express';
import http from 'http';
import path from 'path';

import { StartFunc as StartFuncKWSServer } from "./Projects/KWSServer/EntryFile.js";
import { StartFunc as StartFuncPortListen } from "./PortListen.js";

import { StartFunc as StartFuncFromEntryFile } from "./WA/entryFile.js";
import { GetQrCodeGenerated } from "./qrCodeGenerated.js";

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '7001');

let client;

app.use(express.json({ limit: '100mb' }));

app.use('/', express.static(path.join(path.resolve(), 'public')));

app.get('/getCode', async (req, res) => {
    await StartFuncFromEntryFile({ inClient: client, inReponse: res });
});

app.get('/getQrCode', (req, res) => {
    const qrCode = GetQrCodeGenerated();
    res.end(qrCode);
    // await StartFuncFromEntryFile({ inClient: client, inReponse: res });
});

app.get('/KStudents', async (req, res) => {
    // const response = await fetch('https://join.keshavsoft.biz/binV4/StudentNames/ShowWithColumns');
    const response = await fetch('https://join.keshavsoft.biz/binV4/StudentNames/Search?Mobile=9885886051');
    
    const data = await response.json();
    console.log(data);
    res.json(data);
});


StartFuncKWSServer(server, client);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, StartFuncPortListen);
