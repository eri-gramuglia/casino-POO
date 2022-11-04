export class Craps {
   
    public tirarDados():number{
        let dado=0;
        for(let i=0;i<6;i++){
            dado=Math.floor(Math.random() * 6) + 1;
        }
        return dado;
    }
    public comprobarResultado():number{
       // let ganaCredito = this.sumarCredito(this.apuesta);
       // let pierdeCredito = this.restarCredito(this.apuesta);
        let pDado1 = this.tirarDados();
        let pDado2 = this.tirarDados();
        let suma : number = pDado1 + pDado2;
        let aux : number = 0;
        console.log("La suma de los dados es: ", suma);
        
        if ((suma==7) || (suma==11)){                            // el jugador ganó
                console.log("Primer Dado: ",pDado1," ","Segundo Dado: ", pDado2);
                //console.log("Ud. ganó: ", ganaCredito);  
                aux =-1;
      
        } else if ((suma==2) ||(suma==3) || (suma==12)){                                  // el jugador perdió
                console.log("El resultado es: ", "Primer Dado: ",pDado1," ","Segundo Dado: ", pDado2);
                //console.log("Ud. Perdió: ", pierdeCredito);
                aux = 1;
            
        } else{
            console.log("El resultado es: ", "Primer Dado: ",pDado1," ","Segundo Dado: ", pDado2);
            console.log(` Ud. vuelve a tirar el dado!`); //el jugador vuelve a tirar hasta ganar o perder;
            
        } 
        //console.log(aux);
        return aux;
    }
    public obtenerPremio(apuesta:number):number{
        let aux : number = this.comprobarResultado();
        let premio : number = 0;
        if (aux === -1){
            premio = apuesta * 2;
        } else if (aux ===1){
            premio -= apuesta; 
        } else {
            premio = 0;
        } 
        return premio;
    } 
}
    
 

    