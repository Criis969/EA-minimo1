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
Object.defineProperty(exports, "__esModule", { value: true });
exports.seguimientoController = void 0;
const seguimientoService_1 = require("../services/seguimientoService");
class SeguimientoController {
    createOneHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const seguimiento = req.body;
            console.log(req.body);
            yield (0, seguimientoService_1.createSeguimiento)(seguimiento)
                .then((result) => {
                if (result)
                    return res.json(result).status(201);
                return res.status(403).send({ message: "Invalid body" });
            })
                .catch((error) => {
                return res.status(500).send({ Error: error });
            });
        });
    }
    getOneHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield (0, seguimientoService_1.getSeguimiento)(id)
                .then((seguimiento) => {
                if (seguimiento)
                    return res.json(seguimiento).status(200);
                return res.status(404).send({ message: "User not found" });
            })
                .catch((error) => {
                return res.status(500).send("Server error");
            });
        });
    }
}
exports.seguimientoController = new SeguimientoController();
