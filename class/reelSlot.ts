import { reelSlot1 } from './../main';
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
    let aux:number=0;
    let reward=0;
      if(this.verifyBet(pBetValue) && this.checkRollers()){
          aux=this.getReward();
      }
        if(aux===-1){
            console.log(`Felicidades gano el pozo!!! ${this.well}`);
            reward=-1;
        } else if(aux===0){
            console.log(`Suerte para la proxima.`);
            reward=0
        } else {
          console.log(`Felicidades ganó ${aux * pBetValue} creditos.`);
          reward+=aux * pBetValue;
        } 
    return reward
  } 
} 

