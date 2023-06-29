"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/assets/:file', (req, res) => {
    // Handle the static asset request here
});
// app.get('/', (req: Request, res: Response) => {
//     res.send('Express + TypeScript Server')
// });
