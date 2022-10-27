import { Player } from "./player"
export class Roulette {
    private _id: number;
    private _numBlacks: Array <number>;
    private _numWhite: Array <number>;
    private _numRandom: number;
    private _boxFound: number;
    private _player: Player;

    constructor(p_id: number, p_numBlacks: Array<number>, p_numWhite: Array<number>,p_numRandom: number,p_boxFound:number,p_player:Player) {
        this._id = p_id;
        this._numBlacks = p_numBlacks;
        this._numWhite = p_numWhite;
        this._numRandom = p_numRandom;
        this._boxFound = p_boxFound;
        this._player = p_player;
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

    public setBoxFound(p_boxFound:number):void {
        this._boxFound = p_boxFound;
    }
    public getBoxFound():number {
        return this._boxFound;
    }
    public setPlayersList(p_player: Player):void {
        this._player = p_player;
    }
    public getNumRandom():number {
        let min: number = Math.ceil(0);
       // console.log(this._numBlacks.length+this._numWhite.length)
        let max: number = Math.floor(38);
        this._numRandom = Math.floor(Math.random() * (max - min + 1) + min);
        return this._numRandom;
    }

}

