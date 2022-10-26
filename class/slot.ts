export class Slot {
    protected id:number;
    protected betValue:number[];
    protected theme:string;
    protected symbolsNumber:number;
    protected winProbability:number;
    
    protected constructor(pId:number,pBetValue:number[],pTheme:string,pSymbolsNumber:number,pWinProbability:number) {
        this.id=pId;
        this.betValue=pBetValue;
        this.theme=pTheme;
        this.symbolsNumber=pSymbolsNumber;
        this.winProbability=pWinProbability;
    }
    protected getId():number{
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
    protected play():void{
    }
    protected setWinProbability(newProbability:number):void{
        this.winProbability=newProbability;
    }
}

