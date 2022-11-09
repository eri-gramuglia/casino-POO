import * as fs from 'fs';
import { ReelSlot } from './reelSlot';
import { ProgressiveSlot } from "./progressiveSlot";
import { Roulette } from './roulette';
import { Craps } from './craps';
import { Player } from './player';
export class Casino {
    private casinoName:string;
    private progressiveSlotList:ProgressiveSlot[];
    private reelSlotList:ReelSlot[];
    private rouletteEnable:Roulette;
    private player:Player;
    private crapsEnable:Craps;
    private treasury:number;

    public constructor(pName:string,pProgressiveSlotList:ProgressiveSlot[],pReelSlotList:ReelSlot[],pRouletteEnable:Roulette, pPlayer:Player,pCrapsEnable:Craps,pTreasury:number){
        this.casinoName=pName;
        this.progressiveSlotList=pProgressiveSlotList;
        this.reelSlotList=pReelSlotList;
        this.treasury=pTreasury;
        this.rouletteEnable=pRouletteEnable;
        this.player=pPlayer;
        this.crapsEnable=pCrapsEnable;
        
    }
    public getCasinoName():string{
        return this.casinoName;
    }
    public setCasinoName(newName:string):void{
        this.casinoName=newName;
    }
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
    public setPlayer(p_player: Player): void {
        this.player = p_player;

    }
    public playRoulette(bet:Array<number>,opt:Array<string>):void {
        this.rouletteEnable.setBetOption(opt);
        this.rouletteEnable.setBetValue(bet);

        let betResultFinal: number = this.rouletteEnable.toTurn();
        let newFounds: number = this.player.getFoundsAvailable() + betResultFinal;
        this.player.setFoundsAvailable(newFounds);
        this.setTreasury(betResultFinal)

        console.log ("----------------------------------------------------------------");
        console.log (`Su saldo actual es de: ${this.player.getFoundsAvailable()}`);
        console.log ("----------------------------------------------------------------");
    }
    public playCraps(betCraps:number){
        let founds:number=this.crapsEnable.obtenerPremio(betCraps);
        let newFounds: number = this.player.getFoundsAvailable() + founds;
        this.player.setFoundsAvailable(newFounds);
        this.setTreasury(founds);
    }
    public getTreasury():number{
        return this.treasury;
    }
    public setTreasury(amount:number):void{
        let founds:number;
        if(amount<=0){
            founds=this.treasury-=amount;
        } else {
            founds=this.treasury+=(-amount);
        }
        fs.writeFile('./files.txt/casinoBox.txt',String(founds),{encoding:'utf8'},function(error){
        if(error){
            console.log(`Error: ${error}`);
        }
        });
    }
}






