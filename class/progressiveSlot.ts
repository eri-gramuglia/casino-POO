import { Slot } from "./slot";
export class ProgressiveSlot extends Slot {
  private payLine: number;
  private jackpot: number;

  public constructor(pId:number,pBetValue:number[],pTheme:string,pSymbolsNumber:number,pWinProbability:number,
pRollerNumber:number,pPayLine:number,pJackpot:number){
    super(pId,pBetValue,pTheme,pSymbolsNumber,pWinProbability,pRollerNumber);
    this.payLine = pPayLine;
    this.jackpot = pJackpot;
  }
  public getPayLine():number{
    return this.payLine;
  }
  public getJackpot():number{
    return this.jackpot;
  }
  public setPayLine(newPayLine:number):void{
    this.payLine=newPayLine;
  }
  public setJackpot(newJackpot:number):void{
    this.jackpot+newJackpot;
  }
  private progressiveCombination():number{
    let aux=new Array(this.payLine);
    let combination=0;
      for(let i:number=0;i<aux.length;i++){
        combination+=aux[i]=this.getReward();
      } return combination;
    }
    public playProgressiveSlot(pBetValue:number):number{
      let reward=0;
        if(this.verifyBet(pBetValue) && this.checkRollers()){
            reward=this.progressiveCombination()
        }
          if(reward===-1){
              console.log(`Felicidades acertó una linea de 7! Ganó ${pBetValue*500}`);
          } else if(reward===-2){
              console.log(`Felicidades acertó dos lineas de 7! Ganó ${pBetValue*1000}`);
          } else if(reward===-3){
              console.log(`¡¡¡Felicidades acertó el jackpot!!! Ganó ${this.getJackpot()}`);
              this.jackpot===0;
          } 
          else if(reward===0){
            console.log(`Suerte para la proxima.`);
            this.setJackpot(pBetValue);
          } else {
            console.log(`Felicidades ganó ${reward * pBetValue} creditos.`);
          } return reward;
    } 
  } 


