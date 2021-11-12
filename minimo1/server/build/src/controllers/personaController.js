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
exports.personaController = void 0;
const personaService_1 = require("../services/personaService");
class PersonaController {
    getOneHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield (0, personaService_1.getPersona)(id)
                .then((persona) => {
                if (persona)
                    return res.json(persona).status(200);
                return res.status(404).send({ message: "User not found" });
            })
                .catch((error) => {
                return res.status(500).send("Server error");
            });
        });
    }
    getAllHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield (0, personaService_1.getAllPersonas)();
            return res.send(results).status(200);
        });
    }
    updateOneHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const persona = req.body;
            yield (0, personaService_1.updatePersona)(persona, id)
                .then((result) => {
                if (result)
                    return res.status(200);
                return res.status(404).send({ mensaje: "Persona no encontrada " });
            })
                .catch((error) => {
                return res.status(500).send(error);
            });
        });
    }
}
exports.personaController = new PersonaController();
