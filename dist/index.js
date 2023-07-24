"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const http_1 = __importDefault(require("http"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const env = process.env;
const port = process.env.PORT || 3058;
const host = process.env.HOST || '127.0.0.1';
const media_root = env.NODE_ENV === 'development' ? env.MEDIA_ROOT_DEV : env.MEDIA_ROOT_PRO;
const server = http_1.default.createServer(app);
// routes
app.use('/', routes_1.routes);
app.use(express_1.default.static(`${media_root}`));
// app.listen(port, () => {
//     console.log(`[server]: Server is running at http://127.0.0.1:${port}`)
// })
server.listen(port, host);
server.on('listening', function () {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
