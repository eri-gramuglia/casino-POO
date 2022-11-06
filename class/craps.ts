export class Craps {
    private id:number;
    public constructor(pId:number){
        this.id=pId;
    }
    public getId():number{
        return this.id;
    }
    public tirarDados():number{
        let dado=0;
        for(let i=0;i<6;i++){
            dado=Math.floor(Math.random() * 6) + 1;
        }
        return dado;
    }
    public comprobarResultado():number{
        let pDado1 = this.tirarDados();
        let pDado2 = this.tirarDados();
        let suma : number = pDado1 + pDado2;
        let aux : number = 0;
        console.log("La suma de los dados es: ", suma);
        if ((suma==7) || (suma==11)){
            console.log("Primer Dado: ",pDado1," ","Segundo Dado: ", pDado2);
            aux =-1;
        } else if ((suma==2) ||(suma==3) || (suma==12)){        
            console.log("El resultado es: ", "Primer Dado: ",pDado1," ","Segundo Dado: ", pDado2);
            aux = 1;
        } else{
            console.log("El resultado es: ", "Primer Dado: ",pDado1," ","Segundo Dado: ", pDado2);
            console.log("No hay ganadores.");
            
        } 
        return aux;
    }
    public obtenerPremio(apuesta:number):number{
        let aux : number = this.comprobarResultado();
        let premio : number = 0;
        if (aux === -1){
            console.log(`Usted ganó ${apuesta * 2}.`); 
            premio = apuesta * 2;
        } else if (aux ===1){
            console.log(`Pierde la apuesta.`);
            premio -= apuesta; 
        } else {
            premio = 0;
        } 
        return premio;
    } 
}