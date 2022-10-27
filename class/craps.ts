
class craps {
    dado1:number;
    dado2:number;
    credito:number;
    apuestaJugador:number;
    cuentaSaldo:number;
    
    constructor(pDado1:number, pDado2:number, pCredito:number,pApuestaJugador:number, pCuentaSaldo:number){
        this.dado1=pDado1;
        this.dado2=pDado2;
        this.credito=pCredito;
        this.apuestaJugador=pApuestaJugador;
        this.cuentaSaldo=pCuentaSaldo;
    }
    public getNumRandomDado1():number {
        let min: number = Math.ceil(1);
        let max: number = Math.floor(6);
        this.dado1 = Math.floor(Math.random() * (max - min + 1) + min);
        return this.dado1;
    }
    public getNumRandomDado2():number {
        let min: number = Math.ceil(1);
        let max: number = Math.floor(6);
        this.dado2 = Math.floor(Math.random() * (max - min + 1) + min);
        return this.dado2;
    }
    
}