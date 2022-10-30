export class Slot {
  protected id: number;
  protected betValue: number[];
  protected theme: string;
  protected symbolsNumber: number;
  protected winProbability: number;
  protected rollerNumber: number;

  protected constructor(pId:number,pBetValue:number[],pTheme:string,pSymbolsNumber:number,pWinProbability:number,
pRollerNumber:number){
    this.id=pId;
    this.betValue=pBetValue;
    this.theme=pTheme;
    this.symbolsNumber=pSymbolsNumber;
    this.winProbability=pWinProbability;
    this.rollerNumber=pRollerNumber;
  }
  public getId():number{
    return this.id;
  }
  protected getBetValue():number[]{
    return this.betValue;
  }
  protected getTheme():string{
    return this.theme;
  }
  protected getSymbolsNumber():number{
    return this.symbolsNumber;
  }
  protected getWinProbability():number{
    return this.winProbability;
  }
  protected getRollerNumber():number{
    return this.rollerNumber;
  }
  protected setRollerNumber(pNumber:number):void{
    this.rollerNumber=pNumber;
  }
  private setSymbolsNumber(pNumber:number):void{
    this.symbolsNumber=pNumber;
  }
  public setWinProbability(percent:number):void{
    if(percent===50){
      this.setSymbolsNumber(15);
    } else if(percent===75){
      this.setSymbolsNumber(9);
    } else if(percent===100){
      this.setSymbolsNumber(7);
    } else {
      this.setSymbolsNumber(25);
    }
  }
  protected generateRandomNumber():number[]{
    let numbers: number[] = new Array(this.rollerNumber);
      for (let i: number = 0; i < this.rollerNumber; i++) {
        numbers[i] = Math.floor(Math.random() * this.getSymbolsNumber() + 1);
      }
      console.log(numbers);
    return numbers;
  }
  protected getCombination():number{
    let randomNumber:number[]=this.generateRandomNumber();
    let combination:number=0;
      for (let i:number=0;i<randomNumber.length;i++) {
        if (randomNumber.every((e) => randomNumber[0] === e)) {
          if(randomNumber[i]===7){
            combination = 7;
          } else {
            combination=-1;
          }
        } else if (i+1<randomNumber.length && randomNumber.slice(i + 1).indexOf(randomNumber[i])!== -1) {
          combination += 1;
        }
      }
      console.log(`Acertó ${combination} combinaciones.`);
    return combination;
  }
  protected getReward():number{
    let price:number=0;
    let aux:number=this.getCombination();
      if(aux===7){
        price=-7;
      } else if(aux===-1){
        price=-1;
      } else if (aux===1){
        price=5;
      } else if (aux===2){
        price=10;
      } else if (aux===3){
        price=20;
      } else if (aux===4){
        price=40;
      }
    return price;
  }
  protected checkRollers():boolean{
    let aux=false;
      if(this.getRollerNumber()>2 && this.getRollerNumber()<=5){
        aux=true;
      }
      if(aux===true){
        return true;
      } else {
        throw new Error("Elija la cantidad de 3 o 5 rodillos.");
    }
  }
  protected verifyBet(pBetValue:number):boolean{
    let aux=false;
      for(let i:number=0;i<this.getBetValue().length;i++){
        if(pBetValue===this.getBetValue()[i]){
          aux=true;
        } 
      }if(aux===true){
        return true
      }
      else {
        throw Error(`Ingrese una apuesta valida.`);
      }
  } 
}

