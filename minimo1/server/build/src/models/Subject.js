"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongodb_1 = require("mongodb");
const SubjectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    students: {
        type: [mongodb_1.ObjectId],
        required: false
    }
});
exports.default = (0, mongoose_1.model)('Subject', SubjectSchema);
