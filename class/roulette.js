"use strict";
exports.__esModule = true;
exports.Roulette = void 0;
var player_1 = require("./player");
var Roulette = /** @class */ (function () {
    function Roulette(p_id, p_numBlacks, p_numWhite, p_numRandom, p_boxFound, p_player) {
        this._id = p_id;
        this._numBlacks = p_numBlacks;
        this._numWhite = p_numWhite;
        this._numRandom = p_numRandom;
        this._boxFound = p_boxFound;
        this._player = p_player;
    }
    Roulette.prototype.setId = function (p_id) {
        this._id = p_id;
    };
    Roulette.prototype.getId = function () {
        return this._id;
    };
    Roulette.prototype.setNumBlacks = function (p_numBlacks) {
        this._numBlacks = p_numBlacks;
    };
    Roulette.prototype.getNumBlacks = function () {
        return this._numBlacks;
    };
    Roulette.prototype.setNumWhite = function (p_numWhite) {
        this._numWhite = p_numWhite;
    };
    Roulette.prototype.getNumWhite = function () {
        return this._numWhite;
    };
    Roulette.prototype.setBoxFound = function (p_boxFound) {
        this._boxFound = p_boxFound;
    };
    Roulette.prototype.getBoxFound = function () {
        return this._boxFound;
    };
    Roulette.prototype.setPlayersList = function (p_player) {
        this._player = p_player;
    };
    Roulette.prototype.getNumRandom = function () {
        var min = Math.ceil(0);
        // console.log(this._numBlacks.length+this._numWhite.length)
        var max = Math.floor(38);
        this._numRandom = Math.floor(Math.random() * (max - min + 1) + min);
        return this._numRandom;
    };
    Roulette.prototype.getColor = function (p_number) {
        //let aux: string = " ";
        console.log(this._numBlacks.length);
        if (p_number === 0) {
            return "VERDE";
        }
        else {
            for (var i = 0; i <= this._numBlacks.length; i++) {
                if (p_number === this._numBlacks[i]) {
                    return "NEGRO";
                }
            }
            return "BLANCO";
        }
    };
    return Roulette;
}());
exports.Roulette = Roulette;
// instance player test and roulette test
var playerOne = new player_1.Player(1, "Daniel", "Jerez", 10000);
console.log(playerOne);
var blacks = new Array(1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37);
var white = new Array(2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38);
var rouletteOne = new Roulette(1, blacks, white, 2, 500000, playerOne);
console.log(rouletteOne.getColor(0));
