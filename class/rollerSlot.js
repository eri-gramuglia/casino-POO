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
exports.RollerSlot = void 0;
var slot_1 = require("./slot");
var RollerSlot = /** @class */ (function (_super) {
    __extends(RollerSlot, _super);
    function RollerSlot(pId, pBetValue, pTheme, pSymbolsNumber, pWinProbability, pRollerNumber, pWell) {
        var _this = _super.call(this, pId, pBetValue, pTheme, pSymbolsNumber, pWinProbability) || this;
        _this.rollerNumber = pRollerNumber;
        _this.well = pWell;
        return _this;
    }
    RollerSlot.prototype.getRollerNumber = function () {
        return this.rollerNumber;
    };
    RollerSlot.prototype.getWell = function () {
        return this.well;
    };
    RollerSlot.prototype.generateRandomNumber = function () {
        var numbers = new Array(this.rollerNumber);
        for (var i = 0; i < this.rollerNumber; i++) {
            numbers[i] = Math.floor(Math.random() * this.getSymbolsNumber() + 1) * this.getWinProbability();
        }
        return numbers;
    };
    RollerSlot.prototype.getCombination = function () {
        var randomNumber = this.generateRandomNumber();
        var combination = 0;
        for (var i = 0; i < randomNumber.length; i++) {
            if (randomNumber[i] === 7 && randomNumber.every(function (e) { return randomNumber[0] === e; })) {
                combination = 7;
            }
            else if (i + 1 < randomNumber.length && randomNumber.slice(i + 1).indexOf(randomNumber[i]) !== -1) {
                combination += 1;
            }
        }
        console.log(randomNumber);
        return combination;
    };
    RollerSlot.prototype.getReward = function (pBetValue) {
        var reward = 0;
        var aux = this.getCombination();
        if (aux === 1) {
            reward = pBetValue * 25;
            console.log("Felicidades gan\u00F3 ".concat(reward, " creditos."));
        }
        else if (aux === 2) {
            reward = pBetValue * 50;
            console.log("Felicidades gan\u00F3 ".concat(reward, " creditos."));
        }
        else if (aux === 3) {
            reward = pBetValue * 100;
            console.log("Felicidades gan\u00F3 ".concat(reward, " creditos."));
        }
        else if (aux > 3) {
            reward = pBetValue * 200;
            console.log("Felicidades gan\u00F3 ".concat(reward, " creditos."));
        }
        else if (aux == 7) {
            reward = this.well;
            console.log("\u00A1Felicidades gano el pozo! ".concat(this.well));
        }
        return reward;
    };
    return RollerSlot;
}(slot_1.Slot));
exports.RollerSlot = RollerSlot;
var BetValue = [1, 2, 3, 4];
var newRoller = new RollerSlot(212, BetValue, 'Animal', 9, 25, 3, 5000);
newRoller.getReward(2);
