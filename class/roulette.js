"use strict";
exports.__esModule = true;
exports.Roulette = void 0;
var Roulette = /** @class */ (function () {
    //   private _player: Player;
    function Roulette(p_id, p_numRed, p_numBlack, p_numRandom, p_boxFound) {
        this._id = p_id;
        this._numRed = p_numRed;
        this._numBlack = p_numBlack;
        this._numRandom = p_numRandom;
        this._boxFound = p_boxFound;
        //       this._player = p_player;
    }
    Roulette.prototype.setId = function (p_id) {
        this._id = p_id;
    };
    Roulette.prototype.getId = function () {
        return this._id;
    };
    Roulette.prototype.setNumRed = function (p_numRed) {
        this._numRed = p_numRed;
    };
    Roulette.prototype.getNumRed = function () {
        return this._numRed;
    };
    Roulette.prototype.setNumWhite = function (p_numBlack) {
        this._numBlack = p_numBlack;
    };
    Roulette.prototype.getNumWhite = function () {
        return this._numBlack;
    };
    Roulette.prototype.setBoxFound = function (p_boxFound) {
        this._boxFound = p_boxFound;
    };
    Roulette.prototype.getBoxFound = function () {
        return this._boxFound;
    };
    //  public setPlayersList(p_player: Player):void {
    //       this._player = p_player;
    //  }
    Roulette.prototype.getNumRandom = function () {
        var min = Math.ceil(0);
        var max = Math.floor(36);
        this._numRandom = Math.floor(Math.random() * (max - min + 1) + min);
        return this._numRandom;
    };
    Roulette.prototype.getColor = function (p_number) {
        //let aux: string = " ";
        //console.log (this._numRed.length)
        if (p_number === 0) {
            return "VERDE";
        }
        else {
            for (var i = 0; i <= this._numRed.length; i++) {
                if (p_number === this._numRed[i]) {
                    return "ROJO";
                }
            }
            return "NEGRO";
        }
    };
    Roulette.prototype.getEvenOrOdd = function (p_number) {
        if (p_number % 2 === 0) {
            return "PAR";
        }
        else {
            return "IMPAR";
        }
    };
    Roulette.prototype.getDozen = function (p_number) {
        if (p_number <= 12) {
            return "1ra Docena";
        }
        else if (p_number >= 25) {
            return "3ra Docena";
        }
        else {
            return "2da Docena";
        }
    };
    Roulette.prototype.getHighOrLow = function (p_number) {
        if (p_number >= 19) {
            return "Numero ALTO";
        }
        else {
            return "Numero BAJO";
        }
    };
    return Roulette;
}());
exports.Roulette = Roulette;
/*

// instance player test and roulette test

let playerOne: Player = new Player (1,"Daniel","Jerez",10000);
//console.log (playerOne);

let red: number[] = new Array (1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37)
let black: number[] = new Array (2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38)
let rouletteOne : Roulette = new Roulette(1,red,black,2,500000,playerOne)


// test Methods

console.log (rouletteOne.getColor(1))

console.log (rouletteOne.getEvenOrOdd(28))

console.log (rouletteOne.getNumRandom())

console.log (rouletteOne.getHighOrLow(20)) */
