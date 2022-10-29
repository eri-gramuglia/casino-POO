import { progressiveSlot1 } from './../main';
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
      } 
      console.log(combination);
      return combination;
    }
    public playProgressiveSlot(pBetValue:number):number{
      let reward:number=0;
      let aux:number=0
        if(this.verifyBet(pBetValue) && this.checkRollers()){
            aux=this.progressiveCombination();
        }
          if(aux===-7){
              console.log(`Felicidades acertó una linea de 7! Ganó ${pBetValue*1000}.`);
              reward=pBetValue * 1000;
          } else if(aux===-14){
              console.log(`Felicidades acertó dos lineas de 7! Ganó ${pBetValue*2000}.`);
              reward=pBetValue * 2000;
          } else if(aux===-21){
            console.log(`Felicidades acertó tres lineas de 7! Ganó ${pBetValue*3000}.`);
            reward=pBetValue * 3000;
          } else if(aux===-28){
            console.log(`Felicidades acertó cuatro lineas de 7! Ganó ${pBetValue*4000}.`);
            reward=pBetValue * 4000;
          } else if(aux===-35){
            console.log(`¡¡¡Felicidades acertó el jackpot!!! Ganó ${this.getJackpot()}.`);
            reward=this.getJackpot()
            this.setJackpot(0);
            reward=-5; 
          } else if(aux===-1){
            console.log(`Felicidades acertó una linea! Ganó ${pBetValue*500}.`);
            reward=pBetValue * 500;
          } else if(aux===-2){
            console.log(`Felicidades acertó dos lineas! Ganó ${pBetValue*1000}.`);
            reward=pBetValue * 1000;
          } else if(aux===-3){
            console.log(`Felicidades acertó tres lineas! Ganó ${pBetValue*2000}.`);
            reward=pBetValue * 2000;
          } else if(aux===-4){
            console.log(`Felicidades acertó cuatro lineas! Ganó ${pBetValue*3000}.`);
            reward=pBetValue * 3000;
          } else if(aux===-5){
            console.log(`Felicidades acertó cuatro lineas! Ganó ${pBetValue*4000}.`);
            reward=pBetValue * 4000;
          } else if(aux===0){
            console.log(`Suerte para la proxima.`);
            this.setJackpot(pBetValue * this.payLine);
            reward-pBetValue * this.payLine;
          } else {
            console.log(`Felicidades ganó ${aux * pBetValue} créditos.`);
            reward+= aux * pBetValue;
          } return reward;
    } 
  } 

