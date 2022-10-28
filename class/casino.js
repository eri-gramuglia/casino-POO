"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var reelSlot_1 = require("./reelSlot");
var progressiveSlot_1 = require("./progressiveSlot");
var Casino = /** @class */ (function () {
    function Casino(pName, pProgressiveSlotList, pReelSlotList, /*pRoulleteList:Roullete[],pCrapsList:Craps[],*/ pTreasury) {
        this.casinoName = pName;
        this.progressiveSlotList = pProgressiveSlotList;
        this.reelSlotList = pReelSlotList;
        this.treasury = pTreasury;
        //this.roulleteList=pRoulleteList;
        //this.crapsList=pCrapsList;
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
    /*public getRoullete(id:number):boolean{
        let aux=false;
            for(let i=0;i<this.roulleteList.length;i++){
                if(id===this.roullete[i].getId()){
                    aux=true;
                }
            } if(aux){
                return true;
            }
                else {
                    throw Error(`No existe esta maquina en el casino`);
                }
    }
    public getCraps(id:number):boolean{
        let aux=false;
            for(let i=0;i<this.crapsList.length;i++){
                if(id===this.crapsList[i].getId()){
                    aux=true;
                }
            } if(aux){
                return true;
            }
                else {
                    throw Error(`No existe esta maquina en el casino`);
                }
    } */
    Casino.prototype.getTreasury = function () {
        return this.treasury;
    };
    Casino.prototype.addAmount = function (amount) {
        this.treasury += amount;
    };
    Casino.prototype.subtractAmount = function (amount) {
        this.treasury -= amount;
    };
    return Casino;
}());
exports.Casino = Casino;
var progressiveSlotBet = [1, 2, 5, 10, 15];
var reelSlotBet = [5, 10, 15, 20];
var reelSlot1 = new reelSlot_1.ReelSlot(212, reelSlotBet, "Animal", 9, 20, 4, 5000);
var progressiveSlot1 = new progressiveSlot_1.ProgressiveSlot(2323, progressiveSlotBet, "Egipcio", 15, 25, 4, 5, 10000);
var reelSlotList = [reelSlot1];
var progressiveSlotList = [progressiveSlot1];
var newCasino = new Casino('Atlanta', progressiveSlotList, reelSlotList, 500000);
newCasino.subtractAmount(20000);
var consulta = newCasino.getTreasury();
console.log(consulta);
