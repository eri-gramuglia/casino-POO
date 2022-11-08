import { ProgressiveSlot } from "./class/progressiveSlot";
import { ReelSlot } from "./class/reelSlot";
import { Roulette } from "./class/roulette";
import { Casino } from "./class/casino";
import { Player } from "./class/player";
import { Craps } from "./class/craps";
//Modulos
import * as fs from 'fs';
let readline=require('readline-sync');
let information:string=fs.readFileSync('./files.txt/info.txt','utf-8');
let clasificationText:string[]=information.split('\\');
//Instancia Jugador
let playerOne:Player;
//Instancias tragamonedas
let progressiveSlotBet= [1,2,5,10,15];
let reelSlotBet = [5,10,15,20];
let reelSlotOne:ReelSlot=new ReelSlot(1001,reelSlotBet,"Animal",9,20,3,10000);
let progressiveSlotOne:ProgressiveSlot=new ProgressiveSlot(2001,progressiveSlotBet,"Egipcio",25,25,5,2);
let reelSlotList:ReelSlot[]=[reelSlotOne];
let progressiveSlotList:ProgressiveSlot[]=[progressiveSlotOne];
//Instancia ruleta
let betOptionOne :Array<string> =[];
let betValueOne :Array<number> =[];
let rouletteOne : Roulette = new Roulette (1,0,betValueOne,betOptionOne);
let rouletteList:Roulette[]=[rouletteOne];
//Instancia dados
let craps1:Craps=new Craps(4001); 
let crapsList:Craps[]=[craps1];
//Instancia casino
let casinoBox=Number(fs.readFileSync('./files.txt/casinoBox.txt','utf-8'));
let newCasino:Casino=new Casino('Atlanta',progressiveSlotList,reelSlotList,rouletteList,crapsList,casinoBox);
 // Funcion para carga de jugador
export function newPlayer():void{
    let age:number=readline.questionInt(`Ingrese su edad para verificar si es mayor: `);
    playerOne=new Player(age,'','',0);
    if(playerOne.verifyAge()){
    let name:string=readline.question(`Ingrese su nombre: `);
    let founds:number=readline.questionInt(`Ingrese los fondos que desea utilizar:`);
    playerOne.setName(name);
    playerOne.setFoundsAvailable(founds);
    welcome();
    }
}
//Informacion del casino
    function welcome():void{
    gameInformation(0);
    console.log(`Bienvenido ${playerOne.getName()}, sus fondos disponibles son ${playerOne.getFoundsAvailable()} créditos.`);
    main();
    }
// Funcion de inicio para el menu del casino
function main():void{
    console.log('Oprima 1 para empezar a jugar.');
    let option:number=readline.questionInt();
    switch(option){
        case 1:
        games();
        break;
        default:
        console.log('Ingrese una opción valida');
        main();
    }
}
// Menu de juegos
function games():void{
    console.log('Elija su juego.');
    console.log('1: TRAGAMONEDAS TRADICIONAL');
    console.log('2: TRAGAMONEDAS PROGRESIVO');
    console.log('3: RULETA');
    console.log('4: DADOS');
    console.log('0: Volver al inicio');
    let option:number=readline.questionInt();
    callGame(option);
}
// Llamado a cada juego
function callGame(option:number):void{
    switch(option){
        case 0:
            main();
            break;
        case 1:
            gameOptions();
            let reelOption:number=readline.questionInt();
            reelSlotMenu(reelOption);
            break; 
        case 2:
            gameOptions();
            let progressiveOption:number=readline.questionInt();
            progressiveSlotMenu(progressiveOption);
            break;
        case 3:
            gameOptions();
            let rouleteOption:number=readline.questionInt();
            rouletteMenu(rouleteOption);
            break;
        case 4:
            gameOptions();
            let crapsOption:number=readline.questionInt();
            crapsMenu(crapsOption);
            break;
        default:
            console.log(` -- El número ingresado es incorrecto ingrese un número válido ---`);
            games();
    }
}
// Opciones de cada
function gameOptions():void{
    console.log('Elija una opción. \n1: JUGAR \n2: LEER INFORMACION DEL JUEGO \n0: Volver al menú anterior');
}
/* Funcionalidades de tragamonedas tradicional */
function reelSlotMenu(option:number):void{
    switch(option){
        case 0:
            games();
            break;
        case 1:
            let value:number=readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ');
            if(reelSlotOne.verifyBet(value)){
            playGame(1,value);
            }
            subMenuReel();
            break;
        case 2:
            gameInformation(1);
            callGame(1);
        break;            
    }
}
function subMenuReel():void{
    console.log('1: JUGAR \n2: MULTIPLICAR JUGADAS \n3: CAMBIAR JUEGO \n4: SALIR');
    let gameOption:number=readline.questionInt();
    switch(gameOption){
        case 1:
            reelSlotMenu(1);
            break;
        case 2:
            let times:number=readline.questionInt('Ingrese la cantidad de repeticiones:');
            let value:number=readline.questionInt('Ingrese su apuesta ( 5 - 10 - 15 - 20 ): ');
            if(reelSlotOne.verifyBet(value)){
            replayGame(1,times,value);
            }
            subMenuReel();
            break;
        case 3:
            games();
            break;
        case 4:
            console.log(`${playerOne.getName()} se retiró con ${playerOne.getFoundsAvailable()} créditos.`);
            break;
        default:
            console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
            subMenuReel();
    }
}
/* Funcionalidades de tragamonedas progresivo */
function progressiveSlotMenu(option:number):void{
    switch(option){
        case 0:
            games();
            break;
        case 1:
            let lines:number=readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ');
            if(progressiveSlotOne.verifyLines(lines)){
                let value:number=readline.questionInt('Ingrese su apuesta ( 1 - 2 - 5 - 10 - 15 ): ');
            if(progressiveSlotOne.verifyBet(value)){    
                setSlotLines(lines);
                playGame(2,value);
            }
            }
            subMenuProgressiveSlot();
            break;
        case 2:
            gameInformation(2);
            callGame(2);
            break;
    }
}   
function setSlotLines(lines:number):void{
    progressiveSlotOne.setPayLine(lines);
}
function subMenuProgressiveSlot():void{
    console.log('1: JUGAR \n2: MULTIPLICAR JUGADAS \n3: CAMBIAR JUEGO \n4: SALIR');
    let gameOption:number=readline.questionInt();
        switch(gameOption){
            case 1:
                progressiveSlotMenu(1);
                break;
            case 2:
                let times:number=readline.questionInt('Ingrese la cantidad de repeticiones:');
                let lines:number=readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ');
                if(progressiveSlotOne.verifyLines(lines)){
                    let value:number=readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15): ');
                if(progressiveSlotOne.verifyBet(value)){
                    replayGame(2,times,value);
                    setSlotLines(lines);
                }
                }
                subMenuProgressiveSlot();
                break;
            case 3:
                games();
                break;
            case 4:
                console.log(`${playerOne.getName()} se retiró con ${playerOne.getFoundsAvailable()} créditos.`);
                break;
            default:
            console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
            subMenuProgressiveSlot();
        }
}
/* Funcionalidades de ruleta */
function rouletteMenu(option:number):void{
    let betValueList : Array<number> = [];
    let betOptionLis : Array<string> = [];
    switch(option){
        case 0:
            games();
            break;
        case 1:
            let auxFounds: number = playerOne.getFoundsAvailable();
            betValueList[0]=readline.questionInt('Ingrese su apuesta a un Numero: ');
            while (betValueList[0] > auxFounds){
                console.log ("Fondos Insuficientes")
                betValueList[0]=readline.questionInt('Ingrese su apuesta nuevamente: ');
            }
            let pleno:number=readline.questionInt('Ingrese Numero entre 1 y 36 para PLENO: ');
            while (pleno < 1 || pleno>36) {
                pleno=readline.questionInt('Ingrese Numero entre 1 y 36 para PLENO: ');
            }
            auxFounds = auxFounds - betValueList[0]
            let color:string;
            let p_color: number = readline.questionInt('Ingrese Color para Jugar, Para ROJO (1), para NEGRO (2) o Pasar (3): ');
            if (p_color )
            switch(p_color) {
                case 1:
                    color = "ROJO"
                    betOptionLis[1]=color;
                    betValueList[1]=readline.questionInt(`Ingrese su apuesta a color ${color}: ` );
                    while (betValueList[1] > auxFounds){
                        console.log ("Fondos Insuficientes")
                        betValueList[1]=readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 2:
                    color = "NEGRO";
                    betOptionLis[1]=color;
                    betValueList[1]=readline.questionInt(`Ingrese su apuesta a color ${color}: ` );
                    while (betValueList[1] > auxFounds - betValueList[0]){
                        console.log ("Fondos Insuficientes")
                        betValueList[1]=readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 3:
                    color = "";
                    betValueList[1] = 0
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item")
                    break;
            }
            auxFounds = auxFounds - betValueList[1]
            let parOinpar:string;
            let p_parOinpar:number=readline.questionInt ('Ingrese PAR (1) o IMPAR (2) o Pasar (3): ');
            switch(p_parOinpar) {
                case 1:
                    parOinpar = "PAR";
                    betOptionLis[2]=parOinpar;
                    betValueList[2]=readline.questionInt(`Ingrese su apuesta para ${parOinpar}: ` );
                    while (betValueList[2] > auxFounds){
                        console.log ("Fondos Insuficientes")
                        betValueList[1]=readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 2:
                    parOinpar = "IMPAR";
                    betOptionLis[2]=parOinpar;
                    betValueList[2]=readline.questionInt(`Ingrese su apuesta para ${parOinpar}: ` );
                    while (betValueList[2] > auxFounds){
                        console.log ("Fondos Insuficientes")
                        betValueList[2]=readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 3:
                    parOinpar = "";
                    betValueList[2] = 0
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item")
                    break;
            }
            auxFounds = auxFounds - betValueList[2]
            let docena :string;
            let p_docena:number=readline.questionInt('Ingrese 1ra Docena (1), 2da Docena (2) o 3ra Docena (3), o Pasar (4): ');
            switch (p_docena) {
                case 1:
                    docena = "1ra Docena";
                    betOptionLis[3]=docena;
                    betValueList[3]=readline.questionInt(`Ingrese su apuesta para ${docena}: ` );
                    while (betValueList[3] > auxFounds){
                        console.log ("Fondos Insuficientes")
                        betValueList[3]=readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 2:
                    docena = "2da Docena";
                    betOptionLis[3]=docena;
                    betValueList[3]=readline.questionInt(`Ingrese su apuesta para ${docena}: ` );
                    while (betValueList[3] > auxFounds){
                        console.log ("Fondos Insuficientes")
                        betValueList[3]=readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break
                case 3:
                    docena = "3da Docena";
                    betOptionLis[3]=docena;
                    betValueList[3]=readline.questionInt(`Ingrese su apuesta para ${docena}: ` );
                    while (betValueList[3] > auxFounds){
                        console.log ("Fondos Insuficientes")
                        betValueList[3]=readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 4:
                    docena = "";
                    betValueList[3] = 0
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item")
                    break; 
            }
            auxFounds = auxFounds - betValueList[3]
            let altoObajo:string
            let p_altoObajo:number =readline.questionInt('Apostar a Numero ALTO (1) o Numero BAJO(2), Pasar (3): ');
            switch(p_altoObajo){
                case 1:
                    altoObajo = "Numero ALTO";
                    betOptionLis[4]=altoObajo;
                    betValueList[4]=readline.questionInt(`Ingrese su apuesta para ${altoObajo}: ` );
                    while (betValueList[3] > auxFounds ){
                        console.log ("Fondos Insuficientes")
                        betValueList[4]=readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 2:
                    altoObajo = "Numero BAJO";
                    betOptionLis[4]=altoObajo;
                    betValueList[4]=readline.questionInt(`Ingrese su apuesta para ${altoObajo}: ` );
                    while (betValueList[3] > auxFounds ){
                        console.log ("Fondos Insuficientes")
                        betValueList[4]=readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 3:
                    altoObajo = "";
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item")
                    break; 
            }

            rouletteOne.setBetOption(betOptionLis);
            rouletteOne.setBetValue(betValueList);
            let betResultFinal: number = rouletteOne.toTurn()
            
            playerOne.setFoundsAvailable(playerOne.getFoundsAvailable()+betResultFinal)
            newCasino.setTreasury(betResultFinal)

            console.log ("----------------------------------------------------------------");
            console.log (`Su saldo actual es de: ${playerOne.getFoundsAvailable()}`);
            console.log ("----------------------------------------------------------------");
            console.log("----------------------------------------------------------------")
            subMenuRoulette()
            //callGame(3)
            //playGame(3,value);
            break;
        case 2:
            gameInformation(3);
            callGame(3);
        break;
    }
}
function subMenuRoulette():void{
    console.log('1: JUGAR \n2: COBRAR Y SALIR \n3: Volver al menú anterior');
    let gameOption:number=readline.questionInt();
        switch(gameOption){
            case 1:
                rouletteMenu(1)
                break;
            case 2:
                console.log ("----------------------------------------------------------------");
                console.log (`Su saldo actual es de: ${playerOne.getFoundsAvailable()}`);
                console.log ("----------------------------------------------------------------");
                //console.log(`Se retiró con ${founds} creditos.`);
                break;
            case 3:
                games();
                break;
            default:
                console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
                subMenuRoulette();
            }
    }
/* Funcionalidades de dados */
function crapsMenu(option:number):void{
    switch(option){
        case 0:
            games();
            break;
        case 1:
            let value:number=readline.questionInt('Ingrese su apuesta: ')
            playGame(3,value);
            subMenuCraps();
            break;
        case 2:
            gameInformation(4);
            callGame(4);
            break;
    }
}
function subMenuCraps():void{
    console.log('1: JUGAR \n2: CAMBIAR JUEGO \n3: SALIR');
    let gameOption:number=readline.questionInt();
    switch(gameOption){
        case 1:
            crapsMenu(1);
            break;
        case 2:
            games();
            break;
        case 3:
            console.log(`${playerOne.getName()} se retiró con ${playerOne.getFoundsAvailable()} créditos.`);
            break;
        default:
            console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
            subMenuCraps();
    }
} 
function playGame(game:number,value:number):void{
    let aux=false;
    let newFounds:number=0;
        if(playerOne.getFoundsAvailable()>=value){
            aux=true
        }
        if(aux){
            switch(game){
                case 1:
                    newFounds=reelSlotOne.playReelSlot(value);
                    break;
                case 2:
                    newFounds=progressiveSlotOne.playProgressiveSlot(value);
                    break;
                case 3:
                    newFounds=craps1.obtenerPremio(value);
                    break;
            }
            playerOne.setFoundsAvailable(playerOne.getFoundsAvailable()+newFounds);
            newCasino.setTreasury(newFounds);
            console.log(`Le quedan ${playerOne.getFoundsAvailable()} créditos.`);
        } else {
        console.log(`No tiene fondos para esta apuesta`);
        }
}
function replayGame(game:number,times:number,value:number):void{
    if(playerOne.getFoundsAvailable()>=times*value){
        for(let i:number=0;i<times;i++){
            playGame(game,value);
        } 
    }  else {
    console.log(`No tiene fondos para esta apuesta.`);
    }
}
function gameInformation(index:number):void{
    let text:string=clasificationText[index].toString();
    console.log(text);
}
