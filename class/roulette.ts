import { Player } from "./player"
export class Roulette {
    private _id: number;
    private _numBlacks: Array <number>;
    private _numWhite: Array <number>;
    private _numRandom: number;
    private _numSelect: number;
    private _colorSelect: string;
    private _betValue: number;
    private _boxFound: number;
    private _playersList: Array<Player>;

    constructor(p_id: number, p_numBlacks: Array<number>, p_numWhite: Array<number>,p_numRandom: number, p_numSelect: number, p_colorSelect: string, p_betValue:number,p_boxFound:number,p_playersList:Array<Player>) {
        this._id = p_id;
        this._numBlacks = p_numBlacks;
        this._numWhite = p_numWhite;
        this._numRandom = p_numRandom;
        this._numSelect = p_numSelect;
        this._colorSelect = p_colorSelect;
        this._betValue = p_betValue;
        this._boxFound = p_boxFound;
        this._playersList = p_playersList;
    }

    public setId(p_id:number):void {
        this._id = p_id;
    }
    public getId():number {
        return this._id;
    }
    public setNumBlacks(p_numBlacks:Array<number>):void {
        this._numBlacks = p_numBlacks;
    }
    public getNumBlacks():Array<number> {
        return this._numBlacks;
    }
    public setNumWhite(p_numWhite:Array<number>):void {
        this._numWhite = p_numWhite;
    }
    public getNumWhite():Array<number> {
        return this._numWhite;
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
    public setBoxFound(p_boxFound:number):void {
        this._boxFound = p_boxFound;
    }
    public getBoxFound():number {
        return this._boxFound;
    }
    public setPlayersList(p_playersList:Array<Player>):void {
        this._playersList = p_playersList;
    }
    public getNumRandom():number {
        let min: number = Math.ceil(0);
        let max: number = Math.floor(38);
        this._numRandom = Math.floor(Math.random() * (max - min + 1) + min);
        return this._numRandom;
    }
    public setNumSelect(p_numSelect:number):void {
        this._numSelect = p_numSelect;
    }

}
