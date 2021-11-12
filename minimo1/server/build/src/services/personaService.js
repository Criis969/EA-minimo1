"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePersona = exports.getAllPersonas = exports.getPersona = void 0;
const Persona_1 = __importDefault(require("../models/Persona"));
function getPersona(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return Persona_1.default.findById(id).catch((error) => {
            console.error("Error finding persona", error);
        });
    });
}
exports.getPersona = getPersona;
function getAllPersonas() {
    return __awaiter(this, void 0, void 0, function* () {
        return Persona_1.default.find().catch((error) => {
            console.error("Error finding personas", error);
        });
    });
}
exports.getAllPersonas = getAllPersonas;
function updatePersona(persona, personaId) {
    return __awaiter(this, void 0, void 0, function* () {
        return Persona_1.default.findByIdAndUpdate(personaId, persona, { useFindAndModify: false })
            .then((result) => {
            console.log("Persona cambiada");
        })
            .catch((error) => {
            console.error("Error editando persona con id: " + personaId, error);
        });
    });
}
exports.updatePersona = updatePersona;
