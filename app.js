import express from 'express';
import http from 'http';
import path from 'path';
import fs from 'fs';

import Whatsapp from 'whatsapp-web.js'
// const { Client, LocalAuth } = Whatsapp
const { Client, LocalAuth } = Whatsapp;

// import { Client, LocalAuth } from 'whatsapp-web.js';
import { startFunc as clientInfoFunc, readFunc } from "./clientInfo.js";

import { StartFunc as StartFuncKWSServer } from "./Projects/KWSServer/EntryFile.js";
import { StartFunc as StartFuncPortListen } from "./PortListen.js";

import { startFunc as log } from "./log.js";
import { StartFunc as StartFuncFromEntryFile } from "./WA/entryFile.js";

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '7001');

let client;
let isReady = false;

const CommonDataPath = "./public/chatData.json";

app.use(express.json({ limit: '100mb' }));

app.use('/', express.static(path.join(path.resolve(), 'public')));

app.get("/k1", async (req, res) => {
    console.log('QR Code received:', client.info, readFunc());

    res.end("this is k1");
});

app.get("/k2", async (req, res) => {
    console.log('k2:');
    readFunc();
    res.end("this is k2");
});

app.get('/getCode', async (req, res) => {
    await StartFuncFromEntryFile({ inClient: client, inReponse: res });
});

app.get('/sendMulti', async (req, res) => {
    // const { number, message } = req.body;
    const number = "+919848163021";
    const message = "Test from KeshavSoft";

    if (!isReady) {
        res.status(400).json({ error: 'Client not ready' });
        return;
    };

    try {
        // const chatId = number.substring(1) + "@c.us";
        console.log("ggggggggggg : ", number, number.substring(1));

        // await client.sendMessage(chatId, message);

        await client.sendMessage("+919848163021".substring(1) + "@c.us", "this is 2nd");

        res.json({ status: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
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
