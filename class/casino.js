"use strict";
exports.__esModule = true;
exports.Casino = void 0;
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
    Casino.prototype.setTreasury = function (amount) {
        if (amount <= 0) {
            this.treasury += amount;
        }
        else {
            this.treasury -= amount;
        }
    };
    return Casino;
}());
exports.Casino = Casino;
