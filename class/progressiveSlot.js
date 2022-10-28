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
var ProgressiveSlot = /** @class */ (function (_super) {
    __extends(ProgressiveSlot, _super);
    function ProgressiveSlot(pId, pBetValue, pTheme, pSymbolsNumber, pWinProbability, pRollerNumber, pPayLine, pJackpot) {
        var _this = _super.call(this, pId, pBetValue, pTheme, pSymbolsNumber, pWinProbability, pRollerNumber) || this;
        _this.payLine = pPayLine;
        _this.jackpot = pJackpot;
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
        this.jackpot + newJackpot;
    };
    ProgressiveSlot.prototype.progressiveCombination = function () {
        var aux = new Array(this.payLine);
        var combination = 0;
        for (var i = 0; i < aux.length; i++) {
            combination += aux[i] = this.getReward();
        }
        return combination;
    };
    ProgressiveSlot.prototype.playProgressiveSlot = function (pBetValue) {
        var reward = 0;
        if (this.verifyBet(pBetValue) && this.checkRollers()) {
            reward = this.progressiveCombination();
        }
        if (reward === -1) {
            console.log("Felicidades acert\u00F3 una linea de 7! Gan\u00F3 ".concat(pBetValue * 500));
        }
        else if (reward === -2) {
            console.log("Felicidades acert\u00F3 dos lineas de 7! Gan\u00F3 ".concat(pBetValue * 1000));
        }
        else if (reward === -3) {
            console.log("\u00A1\u00A1\u00A1Felicidades acert\u00F3 el jackpot!!! Gan\u00F3 ".concat(this.getJackpot()));
            this.jackpot === 0;
        }
        else if (reward === 0) {
            console.log("Suerte para la proxima.");
            this.setJackpot(pBetValue * this.payLine);
        }
        else {
            console.log("Felicidades gan\u00F3 ".concat(reward * pBetValue, " creditos."));
        }
        return reward;
    };
    return ProgressiveSlot;
}(slot_1.Slot));
exports.ProgressiveSlot = ProgressiveSlot;
