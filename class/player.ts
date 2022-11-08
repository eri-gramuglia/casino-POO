export class Player {
    private _age: number;
    private _name: string;
    private _lastName: string;
    private _foundsAvailable: number;

    constructor (p_age: number, p_name: string, p_lastName: string, p_foundsAvailable: number) {
        this._age = p_age;
        this._name = p_name;
        this._lastName = p_lastName;
        this._foundsAvailable = p_foundsAvailable;
    }

    public setAge(p_age: number): void {
        this._age = p_age;
    }
    public getAge(): number {
        return this._age;
    }
    public setName(p_name: string): void {
        this._name = p_name;
    }
    public getName(): string {
        return this._name;
    }
    public setLastName(p_lastName: string): void {
        this._lastName = p_lastName;
    }
    public getLastName(): string {
        return this._lastName;
    }
    public setFoundsAvailable(p_foundsAvailable: number): void {
        this._foundsAvailable=p_foundsAvailable;
    }
    public getFoundsAvailable(): number {
        return this._foundsAvailable;
    }
    public verifyAge():boolean{
        let aux=false;
        if(this.getAge()>=18){
            aux=true;
        } else {
            console.log('Debe ser mayor de edad para ingresar al casino.');
        } return aux;
    } 
}

// instance player Test

/* let playerOne: Player = new Player (1,"Daniel","Jerez",10000);
console.log (playerOne); */
