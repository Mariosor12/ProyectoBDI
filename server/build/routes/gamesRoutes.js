"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class gamesRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesController_1.default.list);
        this.router.get('/:id', gamesController_1.default.listOne);
        this.router.post('/', gamesController_1.default.create);
        this.router.delete('/:id', gamesController_1.default.delete);
        this.router.put('/:id', gamesController_1.default.update);
    }
}
const gameRouter = new gamesRouter();
exports.default = gameRouter.router;