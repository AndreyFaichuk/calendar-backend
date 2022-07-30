"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const multer_1 = require("multer");
const path = require("path");
const uuid_1 = require("uuid");
exports.storage = {
    storage: (0, multer_1.diskStorage)({
        destination: './uploads/avatars',
        filename: (req, file, cb) => {
            const filename = path.parse(file.originalname).name.replace(/\s/g, '') + (0, uuid_1.v4)();
            const extension = path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`);
        }
    })
};
//# sourceMappingURL=helpers.js.map