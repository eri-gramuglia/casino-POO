export class Craps {
    private apuesta:number;
   
    constructor(pApuesta:number){
        this.apuesta = pApuesta;
    }
    public getCredito(){
        return this.apuesta;
    }
    public setCredito(pApuesta:number):void{
        this.apuesta = pApuesta;
    }
    public tirarDados():number{
        let dado=0;
        for(let i=0;i<6;i++){
            dado=Math.floor(Math.random() * 6 + 1);
        }
        return dado;
    }
    public restarCredito(pApuesta:number){
        pApuesta=this.apuesta * 0.95;
        return pApuesta;
    }
    
    public sumarCredito(pApuesta:number):number{
        pApuesta=this.apuesta * 2;
        return pApuesta;
    }

    public comprobarResultado(){
        let ganaCredito = this.sumarCredito(this.apuesta);
        let pierdeCredito = this.restarCredito(this.apuesta);
        let pDado1 = this.tirarDados();
        let pDado2 = this.tirarDados();
        let suma : number = pDado1 + pDado2;
        console.log("La suma de los dados es: ", suma);
        
        if ((suma==7) || (suma==11)){                            // el jugador ganó
                console.log("Primer Dado: ",pDado1," ","Segundo Dado: ", pDado2);
                console.log("Ud. ganó: ", ganaCredito);  
      
        } else if ((suma==2) ||(suma==3) || (suma==12)){                                  // el jugador perdió
                console.log("El resultado es: ", "Primer Dado: ",pDado1," ","Segundo Dado: ", pDado2);
                console.log("Ud. Perdió: ", pierdeCredito);
            
        } else{
            console.log("El resultado es: ", "Primer Dado: ",pDado1," ","Segundo Dado: ", pDado2);
            console.log(` Ud. vuelve a tirar el dado!`); //el jugador vuelve a tirar hasta ganar o perder;
        } 

    }

}

    let juego1 : Craps = new Craps(140);
    console.log("-------------------------------------------------")
    console.log("Ud. Ingresó ",juego1.getCredito(), " créditos");
    console.log("-------------------------------------------------")
    juego1.comprobarResultado();
    console.log("-------------------------------------------------")
    
 

    // Reglas:
    // El jugador debe tirar dos dados, de la suma de ambos, si da como resultado 7 u 11,
    //el jugador gana el doble de los creditos ingresados o en su defecto, el doble del saldo de créditos.
    // Si la suma da como resultado 2,3 o 12, el jugador pierde la partida y se le resta al apuesta el 0.5 del apuesta apostado o restante.
    // En los casos que la suma de como resultado 4,5,6,9 o 10, el jugador vuelve a tirar los dados
    // sin restar ni sumar creditos al saldo.
    // En el caso que el saldo del jugador sea 0, el mismo a pedido eljuego.