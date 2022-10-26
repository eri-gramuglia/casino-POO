import { Slot } from "./slot";

export class RollerSlot extends Slot{
    private rollerNumber:number;
    private well:number;

    public constructor(pId:number,pBetValue:number[],pTheme:string,pSymbolsNumber:number,pWinProbability:number,pRollerNumber:number,pWell:number){
        super(pId,pBetValue,pTheme,pSymbolsNumber,pWinProbability);
        this.rollerNumber=pRollerNumber;
        this.well=pWell;
    }
    public getRollerNumber():number{
        return this.rollerNumber;
    }
    public getWell():number{
        return this.well;
    }
    public generateRandomNumber():number[]{
        let numbers:number[]=new Array(this.rollerNumber);
        for(let i:number=0;i<this.rollerNumber;i++){
            numbers[i]=Math.floor(Math.random()*this.getSymbolsNumber()+1);
        } return numbers;
    }
    public getCombination():number{
        let randomNumber:number[]=this.generateRandomNumber();
        let combination:number=0;
            for(let i:number=0;i<randomNumber.length;i++){
                if(randomNumber[i]===7 && randomNumber.every(e=>randomNumber[0]===e)){
                    combination=7;
                } 
                    else if(i+1<randomNumber.length && randomNumber.slice(i+1).indexOf(randomNumber[i])!==-1){
                    combination+=1;
                    }
            }  console.log(randomNumber);
        return combination;
    }
    public getReward(pBetValue:number):number{
        let reward=0;
        let aux=this.getCombination();
                if(aux===1){
                    reward=pBetValue*25;
                    console.log(`Felicidades ganó ${reward} creditos.`);
                } else if(aux===2){
                    reward=pBetValue*50;
                    console.log(`Felicidades ganó ${reward} creditos.`);
                } else if(aux===3){
                    reward=pBetValue*100;
                    console.log(`Felicidades ganó ${reward} creditos.`);
                } else if(aux>3){
                    reward=pBetValue*200;
                    console.log(`Felicidades ganó ${reward} creditos.`);
                } else if(aux==7){
                    reward=this.well;
                    console.log(`¡Felicidades gano el pozo! ${this.well}`);
                }
            return reward;
    }
}
let BetValue=[1,2,3,4]
let newRoller:RollerSlot=new RollerSlot(212,BetValue,'Animal',9,25,3,5000);


newRoller.getReward(2);


