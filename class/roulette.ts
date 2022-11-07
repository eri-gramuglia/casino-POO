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
    public toTurn(): Array<number> {
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

        return this._betValue;
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
