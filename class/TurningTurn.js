"use strict";
exports.__esModule = true;
exports.TurningTurn = void 0;
var roulette_1 = require("./roulette");
var player_1 = require("./player");
var TurningTurn = /** @class */ (function () {
    function TurningTurn(p_turnNumber, p_roulette, p_betValue, p_numSelect, p_colorSelect) {
        this._turnNumber = p_turnNumber;
        this._roulette = p_roulette;
        this._betValue = p_betValue;
        if (p_numSelect == undefined) {
            this._numSelect = -1;
        }
        else {
            this._numSelect = p_numSelect;
        }
        ;
        if (p_colorSelect == undefined) {
            this._colorSelect = " ";
        }
        else {
            this._colorSelect = p_colorSelect;
        }
    }
    TurningTurn.prototype.setTurNumber = function (p_turnNumber) {
        this._turnNumber = p_turnNumber;
    };
    TurningTurn.prototype.getTurNumber = function () {
        return this._turnNumber;
    };
    TurningTurn.prototype.setRoulette = function (p_turnNumber) {
        this._turnNumber = p_turnNumber;
    };
    TurningTurn.prototype.getRoulette = function () {
        return this._turnNumber;
    };
    TurningTurn.prototype.setNumSelect = function (p_numSelect) {
        this._numSelect = p_numSelect;
    };
    TurningTurn.prototype.getNumSelect = function () {
        return this._numSelect;
    };
    TurningTurn.prototype.setColorSelect = function (p_colorSelect) {
        this._colorSelect = p_colorSelect;
    };
    TurningTurn.prototype.getColorSelect = function () {
        return this._colorSelect;
    };
    TurningTurn.prototype.setBetValue = function (p_betValue) {
        this._betValue = p_betValue;
    };
    TurningTurn.prototype.getBetValue = function () {
        return this._betValue;
    };
    TurningTurn.prototype.turning = function () {
        var aux = this._roulette.getNumRandom();
        if (aux === this._numSelect) {
            console.log("WIN PLENO");
        }
        else {
            console.log("Estoy ACA");
        }
    };
    return TurningTurn;
}());
exports.TurningTurn = TurningTurn;
// instance Roulette and player for test method
var playerOne = new player_1.Player(1, "Daniel", "Jerez", 10000);
var red = new Array(1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37);
var black = new Array(2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38);
var rouletteOne = new roulette_1.Roulette(1, red, black, 2, 500000, playerOne);
// instance TurningTurn
var TurningTurnOne = new TurningTurn(1, rouletteOne, 100, 25, "ROJO");
TurningTurnOne.turning();
