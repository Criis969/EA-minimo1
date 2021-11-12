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
exports.createStudent = exports.getStudent = void 0;
const Student_1 = __importDefault(require("../models/Student"));
function getStudent(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return Student_1.default.findById(id).catch((error) => {
            console.error("Error finding student", error);
        });
    });
}
exports.getStudent = getStudent;
function createStudent(student) {
    return __awaiter(this, void 0, void 0, function* () {
        return Student_1.default.create(student).catch((error) => {
            console.error("Error creating student", error);
        });
    });
}
exports.createStudent = createStudent;
