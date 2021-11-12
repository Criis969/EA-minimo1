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
exports.createSeguimiento = exports.getSeguimiento = void 0;
const Seguimiento_1 = __importDefault(require("../models/Seguimiento"));
function getSeguimiento(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return Seguimiento_1.default.findById(id).catch((error) => {
            console.error("Error finding seguimiento", error);
        });
    });
}
exports.getSeguimiento = getSeguimiento;
function createSeguimiento(seguimiento) {
    return __awaiter(this, void 0, void 0, function* () {
        return Seguimiento_1.default.create(seguimiento).catch((error) => {
            console.error("Error creating seguimiento", error);
        });
    });
}
exports.createSeguimiento = createSeguimiento;
/*export async function addStudent(idSubject: String, subject: ISeguimiento) {
    return Seguimiento.findByIdAndUpdate(
        idSubject, subject, {useFindAndModify: false}).catch((error: any) => {
        console.error("Error finding subject", error);
    });
}*/
