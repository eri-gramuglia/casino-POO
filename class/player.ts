export class Player {
    private _id: number;
    private _name: string;
    private _lastName: string;
    private _foundsAvailable: number;

    constructor (p_id: number, p_name: string, p_lastName: string, p_foundsAvailable: number) {
        this._id = p_id;
        this._name = p_name;
        this._lastName = p_lastName;
        this._foundsAvailable = p_foundsAvailable;
    }

    public setId(p_id: number): void {
        this._id = p_id;
    }
    public getId(): number {
        return this._id;
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
        this._foundsAvailable = p_foundsAvailable;
    }
    public getFoundsAvailable(): number {
        return this._foundsAvailable;
    }
}

// instance player Test

/* let playerOne: Player = new Player (1,"Daniel","Jerez",10000);
console.log (playerOne); */