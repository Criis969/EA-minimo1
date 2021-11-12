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
exports.userController = void 0;
const userService_1 = require("../services/userService");
class UserController {
    createOneHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            console.log(req.body);
            yield (0, userService_1.createUser)(user)
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
            const user = req.body;
            yield (0, userService_1.getUser)(user.name, user.password)
                .then((user) => {
                if (user)
                    return res.json(user).status(200);
                return res.status(404).send({ message: "User not found" });
            })
                .catch((error) => {
                return res.status(500).send("Server error");
            });
        });
    }
}
exports.userController = new UserController();
