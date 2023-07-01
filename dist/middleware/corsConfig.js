"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptionsDelegate = void 0;
const allowlist = ['127.0.0.1:8000'];
const corsOptionsDelegate = (req, callback) => {
    req.headers.origin = req.headers.origin || req.headers.host;
    let corsOptions = allowlist.indexOf(req.headers.origin) !== -1 ? { origin: true } : { origin: false };
    callback('not allowed', corsOptions); // callback expects two parameters: error and options
};
exports.corsOptionsDelegate = corsOptionsDelegate;
