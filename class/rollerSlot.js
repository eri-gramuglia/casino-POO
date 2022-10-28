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
        var _this = _super.call(this, pId, pBetValue, pTheme, pSymbolsNumber, pWinProbability, pRollerNumber) || this;
        _this.rollerNumber = pRollerNumber;
        _this.well = pWell;
        return _this;
    }
    RollerSlot.prototype.getWell = function () {
        return this.well;
    };
    RollerSlot.prototype.setWeel = function (newWell) {
        this.well = newWell;
    };
    RollerSlot.prototype.playRollerSlot = function (pBetValue) {
        var reward = 0;
        if (this.verifyBet(pBetValue) && this.checkRollers()) {
            reward = this.getReward();
        }
        if (reward === -1) {
            console.log("Felicidades gano el pozo!!! ".concat(this.well));
        }
        else if (reward === 0) {
            console.log("Suerte para la proxima.");
        }
        else {
            console.log("Felicidades gan\u00F3 ".concat(reward * pBetValue, " creditos."));
        }
        return reward;
    };
    return RollerSlot;
}(slot_1.Slot));
exports.RollerSlot = RollerSlot;
var betValue = [5, 10, 15, 20];
var rollerSlot = new RollerSlot(212, betValue, "Animal", 9, 20, 4, 5000);
rollerSlot.playRollerSlot(10);
