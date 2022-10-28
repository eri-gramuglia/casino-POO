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
      let reward:number=0;
      let aux:number=0
        if(this.verifyBet(pBetValue) && this.checkRollers()){
            aux=this.progressiveCombination();
        }
          if(aux===-1){
              console.log(`Felicidades acertó una linea de 7! Ganó ${pBetValue*500}`);
              reward=-1;
          } else if(aux===-2){
              console.log(`Felicidades acertó dos lineas de 7! Ganó ${pBetValue*1000}`);
              reward=-2;
          } else if(aux===-3){
            console.log(`Felicidades acertó tres lineas de 7! Ganó ${pBetValue*2000}`);
            reward=-3;
          } else if(aux===-4){
            console.log(`Felicidades acertó cuatro lineas de 7! Ganó ${pBetValue*3000}`);
            reward=-4;
          } else if(aux===-5){
            console.log(`¡¡¡Felicidades acertó el jackpot!!! Ganó ${this.getJackpot()}`);
            this.jackpot===0;
            reward=-5;
          }
          else if(aux===0){
            console.log(`Suerte para la proxima.`);
            this.setJackpot(pBetValue * this.payLine);
            reward=0;
          } else {
            console.log(`Felicidades ganó ${aux * pBetValue} creditos.`);
            reward+=aux*pBetValue;
          } return reward;
    } 
  } 


