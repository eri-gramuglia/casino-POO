import * as fs from 'fs';
export class Roulette {
    private _id: number;
    private _numberSelected: number;
    private _betOption: Array<string>;
    private _betValue: Array<number>;


    constructor(p_id: number, p_numberSelect: number, p_betValue: Array<number>, p_betOption: Array<string>) {
        this._id = p_id;
        this._numberSelected = p_numberSelect;
        this._betValue = p_betValue;
        this._betOption = p_betOption;

    }

    public setId(p_id: number): void {
        this._id = p_id;
    }
    public getId(): number {
        return this._id;
    }
    public setNumSelected(p_numSelect: number): void {
        this._numberSelected = p_numSelect;
    }
    public getNumSelected(): number {
        return this._numberSelected;
    }
    public setBetValue(p_betValue: Array<number>): void {
        this._betValue = p_betValue;
    }
    public getBetValue():  Array<number> {
        return this._betValue;
    }
    public setBetOption(p_betOption: Array<string>) {
        this._betOption = p_betOption;
    }
    public getBetOption() {
        return this._betOption;
    }

    public getEvenOrOdd(p_number: number): string {
        if (p_number % 2 === 0) {
            return "PAR"
        } else {
            return "IMPAR"
        }
    }
    public getColor(p_number: number): string {
        let auxColor: string;
        if (p_number === 0) {
            return auxColor = "VERDE";
        } else if (p_number <= 9 && p_number % 2 !== 0) {
            return auxColor = "ROJO";
        } else if (p_number <= 18 && p_number % 2 === 0 && p_number !== 10) {
            return auxColor = "ROJO";
        } else if (p_number <= 27 && p_number % 2 !== 0) {
            return auxColor = "ROJO";
        } else if (p_number % 2 === 0 && p_number !== 28) {
            return auxColor = "ROJO";
        }
        return auxColor = "NEGRO";
    }

    public getDozen(p_number: number): string {
        if (p_number <= 12) {
            return "1ra Docena";
        } else if (p_number >= 25) {
            return "3ra Docena";
        } else {
            return "2da Docena";
        }
    }
    public getHighOrLow(p_number: number): string {
        if (p_number >= 19) {
            return "Numero ALTO"
        } else {
            return "Numero BAJO"
        }
    }
    private imprimirEstadisticas(valor:string):void{
        fs.appendFile('./files.txt/rouletteEstadisticas.txt',valor,{encoding:'utf8'},function(error){
        if(error){
            console.log(`Error: ${error}`);
        }
        });
    }
    public toTurn(): number {
        let min: number = Math.ceil(0);
        let max: number = Math.floor(36);
        let numRandom: number = Math.floor(Math.random() * (max - min + 1) + min);
        let optionResult: Array<string> = ["number", this.getColor(numRandom), this.getEvenOrOdd(numRandom), this.getDozen(numRandom), this.getHighOrLow(numRandom)];

        console.log ("----------------------------------------------------------------");
        console.log (`Girando...y Sale: ${numRandom} el ${this.getColor(numRandom)}`); 
        console.log ("----------------------------------------------------------------");

        if (numRandom === 0) {
            for (let i = 0; i < this._betValue.length; i++) {
                this._betValue[i] = -this._betValue[i]
            }
            console.log("La Casa GANA la MESA");
        } else {
            if (numRandom === this._numberSelected) {
                console.log("----------------------------------------------------------------");
                console.log("GANASTE el PLENO, tu Apusta se Multiplica x35")
                console.log("----------------------------------------------------------------");
                this._betValue[0] += this._betValue[0] * 35;
            } else if (this._numberSelected !== -1) {
                console.log("----------------------------------------------------------------");
                console.log("perdiste lo apostado para PLENO");
                console.log("----------------------------------------------------------------");
                this._betValue[0] = -this._betValue[0]
            }
            for (var i = 1; i < this._betValue.length; i++) {
                if (this._betValue[i] !== 0) {
                    if (this._betOption[i] === optionResult[i]) {
                        console.log("----------------------------------------------------------------");
                        console.log(`GANASTE lo Aposta a: ${this._betOption[i]}`)
                        console.log("----------------------------------------------------------------");
                        if (i === 3) {
                            this._betValue[i] += this._betValue[i] * 2;
                        } else {
                            this._betValue[i] += this._betValue[i];
                        }
                    } else {
                        console.log("----------------------------------------------------------------");
                        console.log(`Perdiste lo Aposta a: ${this._betOption[i]}`);
                        console.log("----------------------------------------------------------------");
                        this._betValue[i] = -this._betValue[i]
                    }
                }
            }
        }
        let betResult: number = 0
        for (let i = 0; i < this._betValue.length; i++) {
            betResult = betResult + this._betValue[i];
        }
        let estadistica :string;
        if (betResult > 0) {
            estadistica = `\nLa Ruleta entregó ${betResult} créditos. `
            this.imprimirEstadisticas(estadistica);
        } else if (betResult < 0) {
            estadistica = `\nLa Ruleta ganó ${betResult*-1} créditos. `
            this.imprimirEstadisticas(estadistica);
        }
        return betResult;
    }
}
