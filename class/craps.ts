import * as fs from 'fs';
export class Craps {
    private id:number;

    public constructor(pId:number){
        this.id=pId;
    }
    public getId():number{
        return this.id;
    }
    private tirarDados():number{
        let dado=0;
        for(let i=0;i<6;i++){
            dado=Math.floor(Math.random() * 6) + 1;
        }
        return dado;
    }
    private comprobarResultado():number{
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
        let estadistica:string;
        let aux : number = this.comprobarResultado();
        let premio : number = 0;
        if (aux === -1){
            console.log(`Usted ganó ${apuesta * 2}.`); 
            premio = apuesta * 2;
        } else if (aux ===1){
            console.log(`Perdió ${apuesta} créditos.`);
            premio -= apuesta; 
        } else {
            premio = 0;
        }
        if(premio>0){
        estadistica=`\nLa mesa de dados entregó ${premio} créditos. `
        this.imprimirEstadisticas(estadistica);
        } else if(premio<0){
        estadistica=`\nLa mesa de dados ganó ${apuesta} créditos. `
        this.imprimirEstadisticas(estadistica);
        }
        return premio;
    } 
    private imprimirEstadisticas(valor:string):void{
        fs.appendFile('./files.txt/crapsStatistics.txt',valor,{encoding:'utf8'},function(error){
        if(error){
            console.log(`Error: ${error}`);
        }
        });
    }
}
 

