import { Slot } from "./slot";

export class ReelSlot extends Slot {
  private well: number;

  public constructor(pId:number,pBetValue:number[],pTheme:string,pSymbolsNumber:number,pWinProbability:number,pRollerNumber:number,pWell:number){
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
  public playReelSlot(pBetValue:number):number{
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


