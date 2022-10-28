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
  protected generateRandomNumber():number[]{
    let numbers: number[] = new Array(this.rollerNumber);
    for (let i: number = 0; i < this.rollerNumber; i++) {
      numbers[i] = Math.floor(Math.random() * this.getSymbolsNumber() + 1);
    }
    return numbers;
  }
  protected getCombination():number{
    let randomNumber:number[]=this.generateRandomNumber();
    let combination:number=0;
      for (let i:number=0;i<randomNumber.length;i++) {
        if (randomNumber[i]===7 && randomNumber.every((e) => randomNumber[0] === e)) {
          combination = 7;
        } else if (i+1<randomNumber.length && randomNumber.slice(i + 1).indexOf(randomNumber[i])!== -1) {
          combination += 1;
        }
      }
      console.log(randomNumber);
    return combination;
  }
  public getReward():number{
    let reward:number=0;
    let aux=this.getCombination();
      if(aux===7){
        reward=-1;
      }
      if (aux===1){
        reward=25;
      } else if (aux===2){
        reward=50;
      } else if (aux===3){
        reward=100
      } else if (aux>3){
        reward=200
      }
      return reward;
  }
  protected checkRollers():boolean{
    let aux=false;
      if(this.getRollerNumber()>2 && this.getRollerNumber()<=5){
        aux=true;
      }
      if(aux===true){
        return true;
      } else {
        throw new Error("Elija la cantidad de 3 o 5 rodillos");
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
        throw Error(`Ingrese una apuesta valida`);
      }
}
  protected setWinProbability(newProbability: number): void {
    this.winProbability = newProbability;
  }
}

