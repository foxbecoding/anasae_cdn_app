"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = process.env;
const media_root = env.NODE_ENV === 'development' ? env.MEDIA_ROOT_DEV : env.MEDIA_ROOT_PRO;
const config = {
    storage: multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, media_root + req.body.file_path);
        },
        filename: (req, file, cb) => {
            cb(null, req.body.image_name);
        }
    }),
    fileFilter: (req, file, cb) => {
        if (!req.body.file_path) {
            const error = new Error('Please specify file path');
            cb(error);
        }
        cb(null, true);
    }
};
exports.upload = (0, multer_1.default)(config);
