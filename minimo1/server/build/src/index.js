"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
//Importing routes
const routes_1 = __importDefault(require("./routes"));
// Initializations
const app = (0, express_1.default)();
const database_1 = __importDefault(require("./database"));
// Settings
app.set('port', process.env.PORT || 8080);
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // Para poder entender los JSON
app.use(express_1.default.urlencoded({ extended: false })); // Para cuando una URL envie un dato, poder entenderlo
// Routes
app.use('/', routes_1.default);
// Static files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    (0, database_1.default)();
});
