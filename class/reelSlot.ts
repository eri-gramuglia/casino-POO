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
    let reward:number=0;
      if(this.verifyBet(pBetValue) && this.checkRollers()){
        aux=this.getReward();
      }
        if(aux===-7){
          console.log(`¡¡¡ FELICIDADES GANO EL POZO !!! ${this.well}.`);
          reward=this.getWell();
        } else if(aux===-1){
          console.log(`* Felicidades acertó una linea! Ganó ${pBetValue*50}. *`);
          reward=pBetValue * 50;
        } else if(aux===0){
          console.log(`- Perdió ${pBetValue} créditos. -`);
          reward-=pBetValue;
        } else {
          console.log(`- Ganó ${aux * pBetValue} créditos. -`);
          reward+=aux * pBetValue;
        } 
    return reward;
  } 
} 

