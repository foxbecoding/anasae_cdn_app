"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaRoute = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mediaController_1 = require("../Controllers/mediaController");
const multer_1 = require("../middleware/multer");
const cors_2 = require("../middleware/cors");
exports.mediaRoute = express_1.default.Router();
exports.mediaRoute.post('/upload-image/', (0, cors_1.default)(cors_2.corsOptionsDelegate), multer_1.upload.single('image'), mediaController_1.AddImage);
exports.mediaRoute.post('/upload-multi-image/', (0, cors_1.default)(cors_2.corsOptionsDelegate), multer_1.upload.array('images'), mediaController_1.AddImage);
