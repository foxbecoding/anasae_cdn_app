"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaRoute = void 0;
const express_1 = __importDefault(require("express"));
const mediaControllers_1 = require("../Controllers/mediaControllers");
const multerConfig_1 = require("../multerConfig");
const cors_1 = __importDefault(require("cors"));
const corsConfig_1 = require("../corsConfig");
exports.mediaRoute = express_1.default.Router();
exports.mediaRoute.post('/add-image/', (0, cors_1.default)(corsConfig_1.corsOptionsDelegate), multerConfig_1.upload.single('image'), mediaControllers_1.AddImage);
