"use strict";
exports.__esModule = true;
exports.Slot = void 0;
var Slot = /** @class */ (function () {
    function Slot(pId, pBetValue, pTheme, pSymbolsNumber, pWinProbability, pRollerNumber) {
        this.id = pId;
        this.betValue = pBetValue;
        this.theme = pTheme;
        this.symbolsNumber = pSymbolsNumber;
        this.winProbability = pWinProbability;
        this.rollerNumber = pRollerNumber;
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
    Slot.prototype.getRollerNumber = function () {
        return this.rollerNumber;
    };
    Slot.prototype.setRollerNumber = function (pNumber) {
        this.rollerNumber = pNumber;
    };
    Slot.prototype.setSymbolsNumber = function (pNumber) {
        this.symbolsNumber = pNumber;
    };
    Slot.prototype.setWinProbability = function (percent) {
        if (percent === 50) {
            this.setSymbolsNumber(15);
        }
        else if (percent === 75) {
            this.setSymbolsNumber(9);
        }
        else if (percent === 100) {
            this.setSymbolsNumber(7);
        }
        else {
            this.setSymbolsNumber(25);
        }
    };
    Slot.prototype.generateRandomNumber = function () {
        var numbers = new Array(this.rollerNumber);
        for (var i = 0; i < this.rollerNumber; i++) {
            numbers[i] = Math.floor(Math.random() * this.getSymbolsNumber() + 1);
        }
        return numbers;
    };
    Slot.prototype.getCombination = function () {
        var randomNumber = this.generateRandomNumber();
        var combination = 0;
        for (var i = 0; i < randomNumber.length; i++) {
            if (randomNumber.every(function (e) { return randomNumber[0] === e; })) {
                if (randomNumber[i] === 7) {
                    combination = 7;
                }
                else {
                    combination = -1;
                }
            }
            else if (i + 1 < randomNumber.length && randomNumber.slice(i + 1).indexOf(randomNumber[i]) !== -1) {
                combination += 1;
            }
        }
        console.log(randomNumber);
        console.log("Acert\u00F3 ".concat(combination, " combinaciones."));
        return combination;
    };
    Slot.prototype.getReward = function () {
        var price = 0;
        var aux = this.getCombination();
        if (aux === 7) {
            price = -7;
        }
        else if (aux === -1) {
            price = -1;
        }
        else if (aux === 1) {
            price = 10;
        }
        else if (aux === 2) {
            price = 25;
        }
        else if (aux === 3) {
            price = 50;
        }
        else if (aux > 3) {
            price = 100;
        }
        return price;
    };
    Slot.prototype.checkRollers = function () {
        var aux = false;
        if (this.getRollerNumber() > 2 && this.getRollerNumber() <= 5) {
            aux = true;
        }
        if (aux === true) {
            return true;
        }
        else {
            throw new Error("Elija la cantidad de 3 o 5 rodillos.");
        }
    };
    Slot.prototype.verifyBet = function (pBetValue) {
        var aux = false;
        for (var i = 0; i < this.getBetValue().length; i++) {
            if (pBetValue === this.getBetValue()[i]) {
                aux = true;
            }
        }
        if (aux === true) {
            return true;
        }
        else {
            throw Error("Ingrese una apuesta valida.");
        }
    };
    return Slot;
}());
exports.Slot = Slot;
