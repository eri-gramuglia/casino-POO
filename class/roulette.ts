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
        let max: number = Math.floor(38);
        this._numRandom = Math.floor(Math.random() * (max - min + 1) + min);
        return this._numRandom;
    }
    public getColor(p_number: number): string {
        //let aux: string = " ";
        console.log (this._numBlacks.length)
        if (p_number === 0){
            return "VERDE";
        }else {
            for (let i:number = 0; i <= this._numBlacks.length; i++) {
                if (p_number === this._numBlacks[i]) {
                    return "NEGRO";
                }
            }
            return "BLANCO";
        }
    }
    public getEvenOrOdd (p_number):string {
        if (p_number%2 === 0){
            return "PAR"
        }else{
            return "IMPAR"
        }
    }
    public getDozen (p_number):string {
        if (p_number <= 12){
            return "1ra Docena";
        }else if (p_number >= 25) {
            return "3ra Docena";
        }else{
            return "2da Docena";
        }
    }
}




// instance player test and roulette test

let playerOne: Player = new Player (1,"Daniel","Jerez",10000);
//console.log (playerOne);

let blacks: number[] = new Array (1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37)
let white: number[] = new Array (2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38)
let rouletteOne : Roulette = new Roulette(1,blacks,white,2,500000,playerOne)


// test Methods

console.log (rouletteOne.getColor(1))

console.log (rouletteOne.getEvenOrOdd(28))

console.log (rouletteOne.getNumRandom())

console.log (rouletteOne.getDozen(20))

