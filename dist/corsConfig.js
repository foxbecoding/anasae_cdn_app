"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptionsDelegate = void 0;
const allowlist = ['http://127.0.0.1:8000'];
const corsOptionsDelegate = (req, callback) => {
    let corsOptions = allowlist.indexOf(req.header('Origin')) !== -1 ? { origin: true } : { origin: false };
    callback(null, corsOptions); // callback expects two parameters: error and options
};
exports.corsOptionsDelegate = corsOptionsDelegate;
