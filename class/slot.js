"use strict";
exports.__esModule = true;
exports.Slot = void 0;
var fs = require("fs");
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
    Slot.prototype.setSymbolsNumber = function (pNumber) {
        this.symbolsNumber = pNumber;
    };
    Slot.prototype.setWinProbability = function (percent) {
        switch (percent) {
            case 50:
                this.setSymbolsNumber(15);
                break;
            case 75:
                this.setSymbolsNumber(9);
                break;
            case 100:
                this.setSymbolsNumber(7);
                break;
            default:
                this.setSymbolsNumber(25);
        }
    };
    Slot.prototype.generateRandomNumber = function () {
        var numbers = new Array(this.rollerNumber);
        for (var i = 0; i < this.rollerNumber; i++) {
            numbers[i] = Math.floor(Math.random() * this.getSymbolsNumber() + 1);
        }
        console.log(numbers);
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
        console.log("Acert\u00F3 ".concat(combination, " combinaciones."));
        return combination;
    };
    Slot.prototype.getReward = function () {
        var price = 0;
        var aux = this.getCombination();
        switch (aux) {
            case -7:
                price = -7;
                break;
            case -1:
                price = -1;
                break;
            case 1:
                price = 5;
                break;
            case 2:
                price = 10;
            case 3:
                price = 20;
                break;
            case 4:
                price = 40;
                break;
        }
        return price;
    };
    Slot.prototype.checkRollers = function () {
        var aux = false;
        if (this.getRollerNumber() > 2 && this.getRollerNumber() <= 5) {
            aux = true;
        }
        if (aux) {
            return true;
        }
        else {
            console.log("Elija la cantidad de 3 o 5 rodillos.");
            return false;
        }
    };
    Slot.prototype.verifyBet = function (pBetValue) {
        var aux = false;
        for (var i = 0; i < this.getBetValue().length; i++) {
            if (pBetValue === this.getBetValue()[i]) {
                aux = true;
            }
        }
        if (aux) {
            return true;
        }
        else {
            console.log("Ingrese una apuesta valida.");
            return false;
        }
    };
    Slot.prototype.writeStatictis = function (route, value) {
        var statistic = value;
        fs.appendFile('./files.txt/' + route + '.txt', statistic, { encoding: 'utf8' }, function (error) {
            if (error) {
                console.log("Error: ".concat(error));
            }
        });
    };
    return Slot;
}());
exports.Slot = Slot;
