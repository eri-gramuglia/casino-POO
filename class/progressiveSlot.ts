import { Slot } from "./slot";
export class ProgressiveSlot extends Slot {
    private payLine:number[];
    private jackpot:number;

    public constructor(pId:number,pBetValue:number[],pTheme:string,pSymbolsNumber:number,pWinProbability:number,pPayLine:number[],pJackpot:number) {
        super(pId,pBetValue,pTheme,pSymbolsNumber,pWinProbability);
        this.payLine=pPayLine;
        this.jackpot=pJackpot;
    }
    public getPayLine():number[]{
        return this.payLine;
    }
    public getJackpot():number{
        return this.jackpot;
    }
    public setPayLine(newPayLine:number[]):void{
        this.payLine=newPayLine;
    }
    public setJackpot(newJackpot:number):void{
        this.jackpot=newJackpot;
    }
}