import { ProgressiveSlot } from "./progressiveSlot";
import { RollerSlot } from "./rollerSlot";

export class Casino {
    private casinoName:string;
    private progressiveSlotList:ProgressiveSlot[];
    private rollerSlotList:RollerSlot[];
    //private roulleteList:Roullete[];
    //private crapsList:Craps[];
    private treasury:number;

    public constructor(pName:string,pProgressiveSlotList:ProgressiveSlot[],pRollerSlotList:RollerSlot[],/*pRoulleteList:Roullete[],pCrapsList:Craps[],*/pTreasury:number){
        this.casinoName=pName;
        this.progressiveSlotList=pProgressiveSlotList;
        this.rollerSlotList=pRollerSlotList;
        this.treasury=pTreasury;
        //this.roulleteList=pRoulleteList;
        //this.crapsList=pCrapsList;
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
    public getRollerSlot(id:number):boolean{
        let aux=false;
            for(let i=0;i<this.rollerSlotList.length;i++){
                if(id===this.rollerSlotList[i].getId()){
                    aux=true;
                } 
            } if(aux){
                return true;
            }
                else {
                    throw Error(`No existe esta maquina en el casino`);
                } 
    }
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
    public getTreasury():number{
        return this.treasury;
    }
    public addAmount(amount:number):void{
        this.treasury+=amount;
    }
    public subtractAmount(amount:number):void{
        this.treasury-=amount;
    }
}