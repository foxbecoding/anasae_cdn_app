"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptionsDelegate = void 0;
const allowlist = [
    '127.0.0.1:3058',
    '127.0.0.1:8000',
    '192.168.1.235:3058',
    'anasae.local',
    '127.0.0.1:62393'
];
const corsOptionsDelegate = (req, callback) => {
    req.headers.origin = req.headers.origin || req.headers.host;
    let corsOptions = allowlist.indexOf(req.headers.origin) !== -1 ? { origin: true } : { origin: false };
    if (corsOptions.origin) {
        callback(null, corsOptions);
        return;
    }
    callback('origin not allowed', corsOptions);
};
exports.corsOptionsDelegate = corsOptionsDelegate;
