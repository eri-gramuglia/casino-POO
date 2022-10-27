import { Roulette } from "./roulette";

export class TurningTurn {
    private _turnNumber: number;
    private _roulette: Roulette;
    private _betValue: number;
    private _numSelect: number;
    private _colorSelect: string;

    constructor(p_turnNumber: number, p_roulette: Roulette,p_betValue: number, p_numSelect?: number, p_colorSelect?: string){
        this._turnNumber = p_turnNumber;
        this._roulette = p_roulette;
        this._betValue = p_betValue;
        if (p_numSelect == undefined){
            this._numSelect = -1;
        }else{this._numSelect = p_numSelect};
        if (p_colorSelect == undefined){
            this._colorSelect = " ";
        }else{this._colorSelect = p_colorSelect;}

    }

    public setTurNumber(p_turnNumber:number){
        this._turnNumber = p_turnNumber;
    }
    public getTurNumber():number{
        return this._turnNumber;
    }
    public setRoulette(p_turnNumber:number){
        this._turnNumber = p_turnNumber;
    }
    public getRoulette():number{
        return this._turnNumber;
    }
    public setNumSelect(p_numSelect:number):void {
        this._numSelect = p_numSelect;
    }
    public getNumSelect():number {
        return this._numSelect;
    }
    public setColorSelect(p_colorSelect:string):void {
        this._colorSelect = p_colorSelect;
    }
    public getColorSelect():string {
        return this._colorSelect;
    }
    public setBetValue(p_betValue:number):void {
        this._betValue = p_betValue;
    }
    public getBetValue():number {
        return this._betValue;
    }
    public turning ():void {
        let aux = this._roulette.getNumRandom();
        if (aux === this._numSelect){
            console.log ("WIN PLENO")
        }else {
            
        }

    }

}