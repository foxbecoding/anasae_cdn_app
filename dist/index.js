"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const env = process.env;
const port = process.env.PORT || 3058;
const MEDIA_ROOT = env.NODE_ENV === 'development' ? env.MEDIA_ROOT_DEV : env.MEDIA_ROOT_PRO;
// routes
app.use('/', routes_1.routes);
app.use(express_1.default.static(`${MEDIA_ROOT}`));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://127.0.0.1:${port}`);
});
