import express from 'express';
import path from 'path';
import { Client } from 'whatsapp-web.js';
import qrcode from "qrcode";

const app = express();
var port = normalizePort(process.env.PORT || '7001');

let client;
let isReady = false;

app.use(express.json({ limit: '100mb' }));

app.use('/', express.static(path.join(path.resolve(), 'public')));

app.get("/k1", (req, res) => {
    res.end("this is k1");
});

app.get('/init', async (req, res) => {
    if (client) {
        res.json({ status: 'Client already initialized' });
        return;
    }

    client = new Client();

    client.on('qr', async (qr) => {
        try {
            // Convert QR code to data URL
            const qrDataURL = await qrcode.toDataURL(qr);
            app.locals.qrCode = qrDataURL;
            console.log('QR Code received:', qr);
            res.end(qrDataURL);
        } catch (err) {
            console.error('QR Code generation failed:', err);
        }
    });

    client.on('ready', () => {
        isReady = true;
        console.log('Client is ready!');
    });

    await client.initialize();
});

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

app.listen(port, () => {
    console.log("connected");
});
