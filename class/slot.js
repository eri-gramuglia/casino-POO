"use strict";
exports.__esModule = true;
exports.Slot = void 0;
var Slot = /** @class */ (function () {
    function Slot(pId, pBetValue, pTheme, pSymbolsNumber, pWinProbability) {
        this.id = pId;
        this.betValue = pBetValue;
        this.theme = pTheme;
        this.symbolsNumber = pSymbolsNumber;
        this.winProbability = pWinProbability;
    }
    Slot.prototype.getId = function () {
        return this.id;
    };
    Slot.prototype.getBetValue = function () {
        return this.betValue;
    };
    Slot.prototype.getTheme = function () {
        return this.theme;
    };
    Slot.prototype.getSymbolsNumber = function () {
        return this.symbolsNumber;
    };
    Slot.prototype.getWinProbability = function () {
        return this.winProbability;
    };
    Slot.prototype.play = function () {
    };
    Slot.prototype.setWinProbability = function (newProbability) {
        this.winProbability = newProbability;
    };
    return Slot;
}());
exports.Slot = Slot;
