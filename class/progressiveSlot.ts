import { Slot } from "./slot";
import * as fs from 'fs';
export class ProgressiveSlot extends Slot {
  private payLine: number;
  private jackpot: number;

  public constructor(pId:number,pBetValue:number[],pTheme:string,pSymbolsNumber:number,pWinProbability:number,
pRollerNumber:number,pPayLine:number){
    super(pId,pBetValue,pTheme,pSymbolsNumber,pWinProbability,pRollerNumber);
    this.payLine = pPayLine;
    this.jackpot = Number(fs.readFileSync('./files.txt/jackpotSlot.txt'));
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
    let founds=this.jackpot+=newJackpot;
    fs.writeFile('./files.txt/jackpotSlot.txt',String(founds),{encoding:'utf8'},function(error){
      if(error){
        console.log(`Error: ${error}`);
      }
    });
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
    let text:string;
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
      if(reward>0){
      text=`\nEl tragamonedas ${this.id} perdió ${reward} creditos.`
      } else {
        text=`\nEl tragamonedas ${this.id} ganó ${-reward} creditos.`
      }
      this.writeStatictis('progressiveSlotStatistic',text);
      console.log(this.jackpot);
    return reward;
  }
}
