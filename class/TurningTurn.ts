import { Roulette } from "./roulette";
import { Player } from "./player";

export class TurningTurn {
    private _turnNumber: number;
    private _roulette: Roulette;
    private _player:Player;
    private _betValue: number;
    private _numSelect: number;
    private _colorSelect: string;
    private _evenOroddSelect: string;
    private _dozenSelect: string;
    private _highOrLowSelect: string;
    

    constructor(p_turnNumber: number, p_roulette: Roulette,p_player: Player,p_betValue: number, p_numSelect?: number, p_colorSelect?: string,p_evenOroddSelect?: string,p_dozenSelect?: string,p_highOrLowSelect?: string){
        this._turnNumber = p_turnNumber;
        this._roulette = p_roulette;
        this._player = p_player;
        this._betValue = p_betValue;
        if (p_numSelect == undefined){
            this._numSelect = -1;
        }else{this._numSelect = p_numSelect};
        if (p_colorSelect == undefined){
            this._colorSelect = " ";
        }else{this._colorSelect = p_colorSelect;}
        if (p_evenOroddSelect == undefined){
            this._evenOroddSelect = " ";
        }else{this._evenOroddSelect = p_evenOroddSelect;}
        if (p_dozenSelect == undefined){
            this._dozenSelect = " ";
        }else{this._dozenSelect = p_dozenSelect;}
        if (p_highOrLowSelect == undefined){
            this._highOrLowSelect = " ";
        }else{this._highOrLowSelect = p_highOrLowSelect;}

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
        console.log ("----------------------------------------------------------------");
        console.log (`Girando...y Sale: ${this._roulette.getColor(aux)} el ${aux}`); 
        console.log ("----------------------------------------------------------------");

        if (aux === 0) {
            console.log("THE HOUSE WINS")
            this._player.setFoundsAvailable(this._player.getFoundsAvailable()-this.getBetValue());
            this._roulette.setBoxFound(this._roulette.getBoxFound()+this.getBetValue());

        }else if (this._numSelect != -1){
                if (aux === this._numSelect){
                    console.log ("----------------------------------------------------------------");
                    console.log ("WINS PLENO")
                    console.log ("----------------------------------------------------------------");
                    this._player.setFoundsAvailable(this._player.getFoundsAvailable()+(this.getBetValue()*35));
                    this._roulette.setBoxFound(this._roulette.getBoxFound()-this.getBetValue())
                }else {
                    console.log ("Lost PLENO")
                }
                if (this._colorSelect !=" "){
                    if (this._colorSelect === this._roulette.getColor(aux)){
                        console.log ("----------------------------------------------------------------");
                        console.log (`WINS Color: ${this._colorSelect}`)
                        console.log ("----------------------------------------------------------------");
                        this._player.setFoundsAvailable(this._player.getFoundsAvailable()+(this.getBetValue()*1));
                        this._roulette.setBoxFound(this._roulette.getBoxFound()-this.getBetValue());
                    }
                }
                if (this._evenOroddSelect !=" "){
                    if (this._evenOroddSelect === this._roulette.getEvenOrOdd(aux)){
                        console.log ("----------------------------------------------------------------");
                        console.log (`WINS ${this._evenOroddSelect}`)
                        console.log ("----------------------------------------------------------------");
                        this._player.setFoundsAvailable(this._player.getFoundsAvailable()+(this.getBetValue()*1));
                        this._roulette.setBoxFound(this._roulette.getBoxFound()-this.getBetValue());
                    }
                }
                if (this._dozenSelect != " "){
                    if (this._dozenSelect === this._roulette.getDozen(aux)){
                        console.log ("----------------------------------------------------------------");
                        console.log (`WINS ${this._dozenSelect}`)
                        console.log ("----------------------------------------------------------------");
                        this._player.setFoundsAvailable(this._player.getFoundsAvailable()+(this.getBetValue()*2));
                        this._roulette.setBoxFound(this._roulette.getBoxFound()-this.getBetValue());
                    }
                }
                if (this._highOrLowSelect != " "){
                    if (this._highOrLowSelect === this._roulette.getHighOrLow(aux)){
                        console.log ("----------------------------------------------------------------");
                        console.log (`WINS ${this._highOrLowSelect}`)
                        console.log ("----------------------------------------------------------------");
                        this._player.setFoundsAvailable(this._player.getFoundsAvailable()+(this.getBetValue()*1));
                        this._roulette.setBoxFound(this._roulette.getBoxFound()-this.getBetValue());
                    }
                }
        }
    }
}

// instance Roulette and player for test method

let playerOne: Player = new Player (1,"Daniel","Jerez",10000);

let red: number[] = new Array (1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37)
let black: number[] = new Array (2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38)

let rouletteOne : Roulette = new Roulette(1,red,black,2,500000)

// instance TurningTurn

let TurningTurnOne : TurningTurn = new TurningTurn(1,rouletteOne,playerOne,100,25,"ROJO","PAR","1ra Docena","Numero BAJO")

TurningTurnOne.turning()