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
exports.subjectController = void 0;
class SubjectController {
    createOneHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const subject = req.body;
            console.log(req.body);
            yield createSubject(subject)
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
            yield getSubject(id)
                .then((subject) => {
                if (subject)
                    return res.json(subject).status(200);
                return res.status(404).send({ message: "User not found" });
            })
                .catch((error) => {
                return res.status(500).send("Server error");
            });
        });
    }
    getAllHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield getAllSubjects();
            return res.send(results).status(200);
        });
    }
    updateOneHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const subject = req.body;
            yield addStudent(id, subject)
                .then((result) => {
                if (result)
                    return res.status(200).json(result);
                return res.status(404).send({ message: "Subject not found" });
            })
                .catch((error) => {
                return res.status(500).send("Server error");
            });
        });
    }
}
exports.subjectController = new SubjectController();
