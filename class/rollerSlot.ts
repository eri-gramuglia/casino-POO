import { Slot } from "./slot";

export class RollerSlot extends Slot {
  private well: number;

  public constructor(pId:number,pBetValue:number[],pTheme: string,pSymbolsNumber:number,pWinProbability:number,pRollerNumber:number,pWell:number){
    super(pId,pBetValue,pTheme,pSymbolsNumber,pWinProbability,pRollerNumber);
    this.rollerNumber=pRollerNumber;
    this.well=pWell;
  }
  public getWell():number{
    return this.well;
  }
  public setWeel(newWell:number):void{
    this.well=newWell;
  }
  public playRollerSlot(pBetValue:number):number{
    let reward=0;
      if(this.verifyBet(pBetValue) && this.checkRollers()){
          reward=this.getReward();
      }
        if(reward===-1){
            console.log(`Felicidades gano el pozo!!! ${this.well}`);
        } else if(reward===0){
            console.log(`Suerte para la proxima.`);
        } else {
          console.log(`Felicidades ganó ${reward * pBetValue} creditos.`);
        } 
    return reward;
  } 
} 

let betValue = [5,10,15,20];
let rollerSlot: RollerSlot = new RollerSlot(212,betValue,"Animal",9,20,4,5000);

rollerSlot.playRollerSlot(10)
