import * as fs from 'fs';
import { ReelSlot } from './reelSlot';
import { ProgressiveSlot } from "./progressiveSlot";
import { Roulette } from './roulette';
import { Craps } from './craps';
export class Casino {
    private casinoName:string;
    private progressiveSlotList:ProgressiveSlot[];
    private reelSlotList:ReelSlot[];
    private rouletteList:Roulette[];
    private crapsList:Craps[];
    private treasury:number;

    public constructor(pName:string,pProgressiveSlotList:ProgressiveSlot[],pReelSlotList:ReelSlot[],pRouletteList:Roulette[],pCrapsList:Craps[],pTreasury:number){
        this.casinoName=pName;
        this.progressiveSlotList=pProgressiveSlotList;
        this.reelSlotList=pReelSlotList;
        this.treasury=pTreasury;
        this.rouletteList=pRouletteList;
        this.crapsList=pCrapsList;
        
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
    public getRoullete(id:number):boolean{
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






