
class Craps {
    dado1:number;
    dado2:number;
    credito:number;

    constructor(pDado1:number, pDado2:number, pCredito:number){
        this.dado1=pDado1;
        this.dado2=pDado2;
        this.credito=pCredito;
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
    public getCredito(){
        return this.credito;
    }
    public setCredito(pCredito:number):void{
        this.credito = pCredito;
    }
    public comprobarResultado(){
        let pDado1 = this.dado1;
        let pDado2 = this.dado2;
        let suma:number;
        suma = pDado1 + pDado2;
        if ((suma=7) !&& (suma=11)){
             this.sumarCredito; // el jugador ganó
        } else if ((suma=2)!&&(suma=3)!&& (suma=12)){
              this.restarCredito;// el jugador perdió
        } else{
            console.log(` Ud. vuelve a tirar el dado!`); //el jugador vuelve a tirar hasta ganar o perder
        }   
    }
    public restarCredito(pcredito:number){
        pcredito=this.credito + 10;
    }
    public sumarCredito(pCredito:number){
        pCredito=this.credito - 10;
    }
}