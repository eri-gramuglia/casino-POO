"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var fs = require("fs");
var Casino = /** @class */ (function () {
    function Casino(pName, pProgressiveSlotList, pReelSlotList, pRouletteList, pCrapsList, pTreasury) {
        this.casinoName = pName;
        this.progressiveSlotList = pProgressiveSlotList;
        this.reelSlotList = pReelSlotList;
        this.treasury = pTreasury;
        this.rouletteList = pRouletteList;
        this.crapsList = pCrapsList;
    }
    Casino.prototype.getCasinoName = function () {
        return this.casinoName;
    };
    Casino.prototype.setCasinoName = function (newName) {
        this.casinoName = newName;
    };
    Casino.prototype.getProgressiveSlot = function (id) {
        var aux = false;
        for (var i = 0; i < this.progressiveSlotList.length; i++) {
            if (id === this.progressiveSlotList[i].getId()) {
                aux = true;
            }
        }
        if (aux) {
            return true;
        }
        else {
            throw Error("No existe esta maquina en el casino");
        }
    };
    Casino.prototype.getReelSlot = function (id) {
        var aux = false;
        for (var i = 0; i < this.reelSlotList.length; i++) {
            if (id === this.reelSlotList[i].getId()) {
                aux = true;
            }
        }
        if (aux) {
            return true;
        }
        else {
            throw Error("No existe esta maquina en el casino");
        }
    };
    Casino.prototype.getRoullete = function (id) {
        var aux = false;
        for (var i = 0; i < this.rouletteList.length; i++) {
            if (id === this.rouletteList[i].getId()) {
                aux = true;
            }
        }
        if (aux) {
            return true;
        }
        else {
            throw Error("No existe esta maquina en el casino");
        }
    };
    Casino.prototype.getCraps = function (id) {
        var aux = false;
        for (var i = 0; i < this.crapsList.length; i++) {
            if (id === this.crapsList[i].getId()) {
                aux = true;
            }
        }
        if (aux) {
            return true;
        }
        else {
            throw Error("No existe esta maquina en el casino");
        }
    };
    Casino.prototype.getTreasury = function () {
        return this.treasury;
    };
    Casino.prototype.setTreasury = function (amount) {
        var founds;
        if (amount <= 0) {
            founds = this.treasury -= amount;
        }
        else {
            founds = this.treasury += (-amount);
        }
        fs.writeFile('./files.txt/casinoBox.txt', String(founds), { encoding: 'utf8' }, function (error) {
            if (error) {
                console.log("Error: ".concat(error));
            }
        });
    };
    return Casino;
}());
exports.Casino = Casino;
