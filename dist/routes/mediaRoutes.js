"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaRoute = void 0;
const express_1 = __importDefault(require("express"));
exports.mediaRoute = express_1.default.Router();
exports.mediaRoute.get('/media/:file', (req, res) => {
    // console.log(req.body)
    // res.send()
});
// app.get('/', (req: Request, res: Response) => {
//     res.send('Express + TypeScript Server')
// });
