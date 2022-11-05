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
exports.ReelSlot = void 0;
var slot_1 = require("./slot");
var ReelSlot = /** @class */ (function (_super) {
    __extends(ReelSlot, _super);
    function ReelSlot(pId, pBetValue, pTheme, pSymbolsNumber, pWinProbability, pRollerNumber, pWell) {
        var _this = _super.call(this, pId, pBetValue, pTheme, pSymbolsNumber, pWinProbability, pRollerNumber) || this;
        _this.rollerNumber = pRollerNumber;
        _this.well = pWell;
        return _this;
    }
    ReelSlot.prototype.getWell = function () {
        return this.well;
    };
    ReelSlot.prototype.setWeel = function (newWell) {
        this.well = newWell;
    };
    ReelSlot.prototype.playReelSlot = function (pBetValue) {
        var text;
        var aux = 0;
        var reward = 0;
        if (this.verifyBet(pBetValue) && this.checkRollers()) {
            aux = this.getReward();
        }
        switch (aux) {
            case -7:
                console.log("\u00A1\u00A1\u00A1 FELICIDADES GANO EL POZO !!! ".concat(this.well, "."));
                reward = this.getWell();
                break;
            case -1:
                console.log("* Felicidades acert\u00F3 una linea! Gan\u00F3 ".concat(pBetValue * 50, ". *"));
                reward = pBetValue * 50;
                break;
            case 0:
                console.log("- Perdi\u00F3 ".concat(pBetValue, " cr\u00E9ditos. -"));
                reward -= pBetValue;
                break;
            default:
                console.log("- Gan\u00F3 ".concat(aux * pBetValue, " cr\u00E9ditos. -"));
                reward += aux * pBetValue;
        }
        if (reward > 0) {
            text = "\nEl tragamonedas ".concat(this.id, " perdi\u00F3 ").concat(reward, " creditos.");
        }
        else {
            text = "\nEl tragamonedas ".concat(this.id, " gan\u00F3 ").concat(-reward, " creditos.");
        }
        this.writeStatictis('reelSlotStatistics', text);
        return reward;
    };
    return ReelSlot;
}(slot_1.Slot));
exports.ReelSlot = ReelSlot;
