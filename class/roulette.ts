import { Player } from "./player"
export class Roulette {
    private _id: number;
    private _numRed: Array <number>;
    private _numBlack: Array <number>;
    private _numRandom: number;
    private _boxFound: number;
 //   private _player: Player;

    constructor(p_id: number, p_numRed 
: Array<number>, p_numBlack: Array<number>,p_numRandom: number,p_boxFound:number) {
        this._id = p_id;
        this._numRed= p_numRed 
;
        this._numBlack = p_numBlack;
        this._numRandom = p_numRandom;
        this._boxFound = p_boxFound;
 //       this._player = p_player;
    }

    public setId(p_id:number):void {
        this._id = p_id;
    }
    public getId():number {
        return this._id;
    }
    public setNumRed   (p_numRed:Array<number>):void {
        this._numRed= p_numRed 
;
    }
    public getNumRed   ():Array<number> {
        return this._numRed
;
    }
    public setNumWhite(p_numBlack:Array<number>):void {
        this._numBlack = p_numBlack;
    }
    public getNumWhite():Array<number> {
        return this._numBlack;
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
        let max: number = Math.floor(36);
        this._numRandom = Math.floor(Math.random() * (max - min + 1) + min);
        return this._numRandom;
    }
    public getColor(p_number: number): string {
        //let aux: string = " ";
        //console.log (this._numRed.length)
        if (p_number === 0){
            return "VERDE";
        }else {
            for (let i:number = 0; i <= this._numRed.length; i++) {
                if (p_number === this._numRed[i]) {
                    return "ROJO";
                }
            }
            return "NEGRO";
        }
    }
    public getEvenOrOdd (p_number:number):string {
        if (p_number%2 === 0){
            return "PAR"
        }else{
            return "IMPAR"
        }
    }
    public getDozen (p_number:number):string {
        if (p_number <= 12){
            return "1ra Docena";
        }else if (p_number >= 25) {
            return "3ra Docena";
        }else{
            return "2da Docena";
        }
    }
    public getHighOrLow (p_number: number):string{
        if (p_number >= 19){
            return "Numero ALTO"
        } else {
            return "Numero BAJO"
        }
    }
}


/* 

// instance player test and roulette test

let playerOne: Player = new Player (1,"Daniel","Jerez",10000);
//console.log (playerOne);

let red: number[] = new Array (1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37)
let black: number[] = new Array (2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38)
let rouletteOne : Roulette = new Roulette(1,red,black,2,500000,playerOne)


// test Methods

console.log (rouletteOne.getColor(1))

console.log (rouletteOne.getEvenOrOdd(28))

console.log (rouletteOne.getNumRandom())

console.log (rouletteOne.getHighOrLow(20)) */

