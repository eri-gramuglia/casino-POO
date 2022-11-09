"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var fs = require("fs");
var Casino = /** @class */ (function () {
    function Casino(pName, pProgressiveSlotEnable, pReelSlotEnable, pRouletteEnable, pPlayer, pCrapsEnable, pTreasury) {
        this.casinoName = pName;
        this.progressiveSlotEnable = pProgressiveSlotEnable;
        this.reelSlotEnable = pReelSlotEnable;
        this.treasury = pTreasury;
        this.rouletteEnable = pRouletteEnable;
        this.player = pPlayer;
        this.crapsEnable = pCrapsEnable;
    }
    Casino.prototype.getCasinoName = function () {
        return this.casinoName;
    };
    Casino.prototype.setCasinoName = function (newName) {
        this.casinoName = newName;
    };
    /*
    public getProgressiveSlot(id:number):boolean{
        let aux=false;
            for(let i=0;i<this.progressiveSlotList.length;i++){
                if(id===this.progressiveSlotList[i].getId()){
                    aux=true;
                }
            } if(aux){
                return true;
            }
                else {
                    throw Error(`No existe esta maquina en el casino`);
                }
    }
    public getReelSlot(id:number):boolean{
        let aux=false;
            for(let i=0;i<this.reelSlotList.length;i++){
                if(id===this.reelSlotList[i].getId()){
                    aux=true;
                }
            } if(aux){
                return true;
            }
                else {
                    throw Error(`No existe esta maquina en el casino`);
                }
    }
    /*  public getRoullete(id:number):boolean{
        let aux=false;
            for(let i=0;i<this.rouletteList.length;i++){
                if(id===this.rouletteList[i].getId()){
                    aux=true;
                }
            } if(aux){
                return true;
            }
                else {
                    throw Error(`No existe esta maquina en el casino`);
                }
    } */
    /*     public getCraps(id:number):boolean{
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
    Casino.prototype.setPlayer = function (p_player) {
        this.player = p_player;
    };
    Casino.prototype.playProgressiveSlot = function (betSlot) {
        var founds = this.progressiveSlotEnable.playProgressiveSlot(betSlot);
        var newFounds = this.player.getFoundsAvailable() + founds;
        this.player.setFoundsAvailable(newFounds);
        this.setTreasury(founds);
    };
    Casino.prototype.playReelSlot = function (betSlot) {
        var founds = this.reelSlotEnable.playReelSlot(betSlot);
        var newFounds = this.player.getFoundsAvailable() + founds;
        this.player.setFoundsAvailable(newFounds);
        this.setTreasury(founds);
    };
    Casino.prototype.playRoulette = function (bet, opt) {
        this.rouletteEnable.setBetOption(opt);
        this.rouletteEnable.setBetValue(bet);
        var betResultFinal = this.rouletteEnable.toTurn();
        var newFounds = this.player.getFoundsAvailable() + betResultFinal;
        this.player.setFoundsAvailable(newFounds);
        this.setTreasury(betResultFinal);
        console.log("----------------------------------------------------------------");
        console.log("Su saldo actual es de: ".concat(this.player.getFoundsAvailable()));
        console.log("----------------------------------------------------------------");
    };
    Casino.prototype.playCraps = function (betCraps) {
        var founds = this.crapsEnable.obtenerPremio(betCraps);
        var newFounds = this.player.getFoundsAvailable() + founds;
        this.player.setFoundsAvailable(newFounds);
        this.setTreasury(founds);
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
