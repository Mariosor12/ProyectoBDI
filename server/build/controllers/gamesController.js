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
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //pool.query('DESCRIBE games');
            const text = 'SELECT * FROM games';
            yield database_1.default.query(text, (err, resp) => {
                if (err) {
                    console.log(err.stack);
                }
                else {
                    res.json(resp.rows);
                }
            });
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = 'SELECT * FROM games WHERE id = $1';
            const valor = [req.params.id];
            yield database_1.default.query(text, valor, (err, response) => {
                if (err) {
                    console.log(err.stack);
                    res.status(404).json({ text: "game doesn´t exist :(" });
                }
                else {
                    res.json(response.rows);
                }
            });
            //res.json({text:'obtaining game: '+req.params.id});
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body.title);
            const text = 'INSERT INTO games(title, description, image, price) VALUES($1,$2,$3,$4) RETURNING *';
            const valores = [req.body.title, req.body.description, req.body.image, req.body.price];
            yield database_1.default.query(text, valores, (err, resp) => {
                if (err) {
                    console.log(err.stack);
                }
                else {
                }
            });
            res.json({ message: "Game saved :D" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = 'DELETE FROM games WHERE id = $1';
            const valor = [req.params.id];
            yield database_1.default.query(text, valor, (err, response) => {
                if (err) {
                    res.status(404).json({ text: "Error.. Game not found" });
                }
                else {
                    res.json({ text: "Game successfully deleted" });
                }
            });
            /*res.json({
                text:"Deleting a game :("
            })*/
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = 'UPDATE games SET title = $2, description = $3, image = $4, price = $5 WHERE id = $1';
            const valores = [req.params.id, req.body.title, req.body.description, req.body.image, req.body.price];
            yield database_1.default.query(text, valores, (err, response) => {
                if (err) {
                    res.status(404).json({ text: "Error... Game not found" });
                }
                else {
                    res.json({ text: "Game successfully updated :D" });
                }
            });
            //   res.json({text:"Updating a game "+req.params.id});
        });
    }
}
const gamesControler = new GamesController();
exports.default = gamesControler;
