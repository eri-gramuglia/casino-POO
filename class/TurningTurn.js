"use strict";
exports.__esModule = true;
exports.TurningTurn = void 0;
var roulette_1 = require("./roulette");
var player_1 = require("./player");
var TurningTurn = /** @class */ (function () {
    function TurningTurn(p_turnNumber, p_roulette, p_player, p_betValue, p_numSelect, p_colorSelect, p_evenOroddSelect, p_dozenSelect, p_highOrLowSelect) {
        this._turnNumber = p_turnNumber;
        this._roulette = p_roulette;
        this._player = p_player;
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
        if (p_evenOroddSelect == undefined) {
            this._evenOroddSelect = " ";
        }
        else {
            this._evenOroddSelect = p_evenOroddSelect;
        }
        if (p_dozenSelect == undefined) {
            this._dozenSelect = " ";
        }
        else {
            this._dozenSelect = p_dozenSelect;
        }
        if (p_highOrLowSelect == undefined) {
            this._highOrLowSelect = " ";
        }
        else {
            this._highOrLowSelect = p_highOrLowSelect;
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
        console.log("----------------------------------------------------------------");
        console.log("Girando...y Sale: ".concat(this._roulette.getColor(aux), " el ").concat(aux));
        console.log("----------------------------------------------------------------");
        if (aux === 0) {
            console.log("THE HOUSE WINS");
            this._player.setFoundsAvailable(this._player.getFoundsAvailable() - this.getBetValue());
        }
        else if (this._numSelect != -1) {
            if (aux === this._numSelect) {
                console.log("----------------------------------------------------------------");
                console.log("WINS PLENO");
                console.log("----------------------------------------------------------------");
                this._player.setFoundsAvailable(this._player.getFoundsAvailable() + (this.getBetValue() * 35));
            }
            else {
                console.log("Lost PLENO");
            }
            if (this._colorSelect != " ") {
                if (this._colorSelect === this._roulette.getColor(aux)) {
                    console.log("----------------------------------------------------------------");
                    console.log("WINS Color: ".concat(this._colorSelect));
                    console.log("----------------------------------------------------------------");
                    this._player.setFoundsAvailable(this._player.getFoundsAvailable() + (this.getBetValue() * 1));
                }
            }
            if (this._evenOroddSelect != " ") {
                if (this._evenOroddSelect === this._roulette.getEvenOrOdd(aux)) {
                    console.log("----------------------------------------------------------------");
                    console.log("WINS ".concat(this._evenOroddSelect));
                    console.log("----------------------------------------------------------------");
                    this._player.setFoundsAvailable(this._player.getFoundsAvailable() + (this.getBetValue() * 1));
                }
            }
            if (this._dozenSelect != " ") {
                if (this._dozenSelect === this._roulette.getDozen(aux)) {
                    console.log("----------------------------------------------------------------");
                    console.log("WINS ".concat(this._dozenSelect));
                    console.log("----------------------------------------------------------------");
                    this._player.setFoundsAvailable(this._player.getFoundsAvailable() + (this.getBetValue() * 2));
                }
            }
            if (this._highOrLowSelect != " ") {
                if (this._highOrLowSelect === this._roulette.getHighOrLow(aux)) {
                    console.log("----------------------------------------------------------------");
                    console.log("WINS ".concat(this._highOrLowSelect));
                    console.log("----------------------------------------------------------------");
                    this._player.setFoundsAvailable(this._player.getFoundsAvailable() + (this.getBetValue() * 1));
                }
            }
        }
    };
    return TurningTurn;
}());
exports.TurningTurn = TurningTurn;
// instance Roulette and player for test method
var playerOne = new player_1.Player(1, "Daniel", "Jerez", 10000);
var red = new Array(1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37);
var black = new Array(2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38);
var rouletteOne = new roulette_1.Roulette(1, red, black, 2, 500000);
// instance TurningTurn
var TurningTurnOne = new TurningTurn(1, rouletteOne, playerOne, 100, 25, "ROJO", "PAR", "1ra Docena", "Numero BAJO");
TurningTurnOne.turning();