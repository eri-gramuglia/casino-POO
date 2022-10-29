
class Craps {
    credito:number;

    constructor(pCredito:number){
       
        this.credito=pCredito;
    }
    public getCredito(){
        return this.credito;
    }
    public setCredito(pCredito:number):void{
        this.credito = pCredito;
    }
    public tirarDados(){
        let dado=0;
        for(let i=0;i<6;i++){
            dado=Math.floor(Math.random() * 6 + 1);
        }
        return dado;
    }
    public comprobarResultado(){
        let pDado1 = this.tirarDados();
        let pDado2 = this.tirarDados();
        let suma:number = pDado1 + pDado2;
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