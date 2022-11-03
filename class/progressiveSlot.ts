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
    this.jackpot+=newJackpot;
  }
  public verifyLines(lines:number):boolean{
    let aux=false;
    if(0 < lines && lines <= 5){
      aux=true;
    } if(aux){
      return true;
    } else {
      console.log(`Ingrese un número de lineas válido`);
      return false;
    }
  }
  private progressiveCombination():number[]{
    let aux:number[]=new Array(this.payLine);
    let combination:number[]=[];
      for(let i:number=0;i<aux.length;i++){
        combination.push(aux[i]=this.getReward());
      } 
      return combination;
    }
  public playProgressiveSlot(pBetValue:number):number{
    let reward:number=0;
    let jackpot:number=0;
    let aux:number[]=this.progressiveCombination();
      if(this.verifyBet(pBetValue) && this.checkRollers()){
        for(let i:number=0;i<aux.length;i++){
          switch(aux[i]){
            case -7:
              console.log(`* Felicidades acertó una linea de 7 en la linea ${[i+1]}! Ganó ${pBetValue*500}. *`);
              reward+=pBetValue * 500;
              jackpot+1;
              break;
            case -1:
              console.log(`* Felicidades acertó una linea en la linea ${[i+1]}! Ganó ${pBetValue*100}. * `);
              reward+=pBetValue * 100;
              break;
            case 0:
              console.log(`- Perdió ${pBetValue} créditos en la linea ${[i+1]}. -`);
              this.setJackpot(pBetValue);
              reward-=pBetValue;
              break;
            default:
            console.log(`- Ganó ${aux[i] * pBetValue} créditos en la linea ${[i+1]}. -`);
            reward+=aux[i] * pBetValue;
          } 
        }
      }
        if(jackpot===-35){
          console.log(`***¡¡¡FELICIDADES GANO EL JACKPOT!!!**** ${this.getJackpot()}`);
          reward=this.getJackpot();
          this.setJackpot(0);
      }
    return reward;
  }
}
