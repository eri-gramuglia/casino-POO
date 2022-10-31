
export class Craps {
    private credito:number;

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
                console.log("El resultado es: ", "Primer Dado: ",pDado1," ","Segundo Dado: ", pDado2);
        } else if ((suma=2)!&&(suma=3)!&& (suma=12)){
                this.restarCredito;// el jugador perdió
                console.log("El resultado es: ", "Primer Dado: ",pDado1," ","Segundo Dado: ", pDado2);
        } else{
            console.log("El resultado es: ", "Primer Dado: ",pDado1," ","Segundo Dado: ", pDado2);
            console.log(` Ud. vuelve a tirar el dado!`); //el jugador vuelve a tirar hasta ganar o perder
        }   
    }
    public restarCredito(pCredito:number){
        pCredito=this.credito - 0.5;
        console.log("Su crédito es: ", pCredito);
        if (pCredito = 0){
            console.log ("Ud. se quedó sin créditos")
        }
    }
    public sumarCredito(pCredito:number){
        pCredito=this.credito * 2;
        console.log("Su crédito es: ", pCredito);
        }
    }

    let juego1 : Craps = new Craps(150);
    console.log(juego1);
    console.log(juego1.comprobarResultado());
    console.log(juego1.tirarDados());

    // Reglas:
    // El jugador debe tirar dos dados, de la suma de ambos, si da como resultado 7 u 11,
    //el jugador gana el doble de los creditos ingresados o en su defecto, el doble del saldo de créditos.
    // Si la suma da como resultado 2,3 o 12, el jugador pierde la partida y se le resta al credito el 0.5 del credito apostado o restante.
    // En los casos que la suma de como resultado 4,5,6,9 o 10, el jugador vuelve a tirar los dados
    // sin restar ni sumar creditos al saldo.
    // En el caso que el saldo del jugador sea 0, el mismo a pedido eljuego.