"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ProgressiveSlot = void 0;
var slot_1 = require("./slot");
var fs = require("fs");
var ProgressiveSlot = /** @class */ (function (_super) {
    __extends(ProgressiveSlot, _super);
    function ProgressiveSlot(pId, pBetValue, pTheme, pSymbolsNumber, pWinProbability, pRollerNumber, pPayLine) {
        var _this = _super.call(this, pId, pBetValue, pTheme, pSymbolsNumber, pWinProbability, pRollerNumber) || this;
        _this.payLine = pPayLine;
        _this.jackpot = Number(fs.readFileSync('./files.txt/jackpotSlot.txt'));
        return _this;
    }
    ProgressiveSlot.prototype.getPayLine = function () {
        return this.payLine;
    };
    ProgressiveSlot.prototype.getJackpot = function () {
        return this.jackpot;
    };
    ProgressiveSlot.prototype.setPayLine = function (newPayLine) {
        this.payLine = newPayLine;
    };
    ProgressiveSlot.prototype.setJackpot = function (newJackpot) {
        var founds = this.jackpot += newJackpot;
        fs.writeFile('./files.txt/jackpotSlot.txt', String(founds), { encoding: 'utf8' }, function (error) {
            if (error) {
                console.log("Error: ".concat(error));
            }
        });
    };
    ProgressiveSlot.prototype.verifyLines = function (lines) {
        var aux = false;
        if (0 < lines && lines <= 5) {
            aux = true;
        }
        if (aux) {
            return true;
        }
        else {
            console.log("Ingrese un n\u00FAmero de lineas v\u00E1lido");
            return false;
        }
    };
    ProgressiveSlot.prototype.progressiveCombination = function () {
        var aux = new Array(this.payLine);
        var combination = [];
        for (var i = 0; i < aux.length; i++) {
            combination.push(aux[i] = this.getReward());
        }
        return combination;
    };
    ProgressiveSlot.prototype.playProgressiveSlot = function (pBetValue) {
        var text;
        var reward = 0;
        var jackpot = 0;
        var aux = this.progressiveCombination();
        if (this.verifyBet(pBetValue) && this.checkRollers()) {
            for (var i = 0; i < aux.length; i++) {
                switch (aux[i]) {
                    case -7:
                        console.log("* Felicidades acert\u00F3 una linea de 7 en la linea ".concat([i + 1], "! Gan\u00F3 ").concat(pBetValue * 500, ". *"));
                        reward += pBetValue * 500;
                        jackpot + 1;
                        break;
                    case -1:
                        console.log("* Felicidades acert\u00F3 una linea en la linea ".concat([i + 1], "! Gan\u00F3 ").concat(pBetValue * 100, ". * "));
                        reward += pBetValue * 100;
                        break;
                    case 0:
                        console.log("- Perdi\u00F3 ".concat(pBetValue, " cr\u00E9ditos en la linea ").concat([i + 1], ". -"));
                        this.setJackpot(pBetValue);
                        reward -= pBetValue;
                        break;
                    default:
                        console.log("- Gan\u00F3 ".concat(aux[i] * pBetValue, " cr\u00E9ditos en la linea ").concat([i + 1], ". -"));
                        reward += aux[i] * pBetValue;
                }
            }
        }
        if (jackpot === -35) {
            console.log("***\u00A1\u00A1\u00A1FELICIDADES GANO EL JACKPOT!!!**** ".concat(this.getJackpot()));
            reward = this.getJackpot();
            this.setJackpot(0);
        }
        if (reward > 0) {
            text = "\nEl tragamonedas ".concat(this.id, " perdi\u00F3 ").concat(reward, " creditos.");
        }
        else {
            text = "\nEl tragamonedas ".concat(this.id, " gan\u00F3 ").concat(-reward, " creditos.");
        }
        this.writeStatictis('progressiveSlotStatistic', text);
        console.log(this.jackpot);
        return reward;
    };
    return ProgressiveSlot;
}(slot_1.Slot));
exports.ProgressiveSlot = ProgressiveSlot;
