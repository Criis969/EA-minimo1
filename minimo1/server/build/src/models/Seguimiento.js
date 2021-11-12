"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongodb_1 = require("mongodb");
const SeguimientoSchema = new mongoose_1.Schema({
    fecha: {
        type: Date,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    fiebre: {
        type: String,
        required: true
    },
    tosContinuada: {
        type: String,
        required: true
    },
    dificultadRespiratoria: {
        type: String,
        required: true
    },
    malestarGeneral: {
        type: String,
        required: true
    },
    persona: {
        type: mongodb_1.ObjectId,
        required: true
    }
});
exports.default = (0, mongoose_1.model)('Seguimiento', SeguimientoSchema);
