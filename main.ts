import { ProgressiveSlot } from "./class/progressiveSlot";
import { ReelSlot } from "./class/reelSlot";
import { Roulette } from "./class/roulette";
import { Casino } from "./class/casino";
import { Player } from "./class/player";
import { TurningTurn }  from "./class/TurningTurn";
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
let progressiveSlotOne:ProgressiveSlot=new ProgressiveSlot(2001,progressiveSlotBet,"Egipcio",25,25,5,2,500000);
let reelSlotList:ReelSlot[]=[reelSlotOne];
let progressiveSlotList:ProgressiveSlot[]=[progressiveSlotOne];
//Instancia ruleta
let countTurns:number = 0;
let numberRed: number[] = new Array (1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35);
let rouletteOne : Roulette = new Roulette(1,numberRed,0);
let rouletteList:Roulette[]=[rouletteOne];
//Instancia casino
let newCasino:Casino=new Casino('Atlanta',progressiveSlotList,reelSlotList,rouletteList,500000);


//Informacion del casino
export function welcome():void{
    gameInformation(0);
    newPlayer();
    console.log(`Bienvenido ${playerOne.getName()}.`);
    main();
}
 // Funcion para carga de jugador
function newPlayer():void{
    let age:number=readline.questionInt(`Ingrese su edad para verificar si es mayor: `);
    if(age>=18){
    let name:string=readline.question(`Ingrese su nombre: `);
    let surname:string=readline.question(`Ingrese su apellido: `);
    let founds:number=readline.questionInt(`Ingrese sus los fondos que desea utilizar:`);
    playerOne=new Player(age,name,surname,founds);
    console.log(playerOne);
    } else {
        throw console.error('Debe ser mayor de edad para ingresar al casino.');
    }
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
    console.log('Elija una opción. \n 1: JUGAR \n 2: LEER INFORMACION DEL JUEGO \n 0: Volver al menú anterior');
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
    console.log('1: JUGAR \n2: MULTIPLICAR JUGADAS \n3: COBRAR Y SALIR');
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
    console.log('1: JUGAR \n2: MULTIPLICAR JUGADAS \n3: COBRAR Y SALIR');
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
                console.log(`${playerOne.getName()} se retiró con ${playerOne.getFoundsAvailable()} créditos.`);
                break;
            default:
            console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
            subMenuProgressiveSlot();
        }
}
/* Funcionalidades de ruleta */
function rouletteMenu(option:number):void{
    switch(option){
        case 0:
            games();
            break;
        case 1:
            let value:number=readline.questionInt('Ingrese su apuesta: ');
            let pleno:number=readline.questionInt('Ingrese Numero entre 1 y 36 para PLENO: ');
            while (pleno < 1 || pleno>36) {
                pleno=readline.questionInt('Ingrese Numero entre 1 y 36 para PLENO: ');
            }

            let color:string | undefined=readline.question('Ingrese Color para Jugar, o solo deje Vacio: ');
            if (color===""){
                color = undefined;
            }
            let parOinpar:string | undefined=readline.question('Ingrese PAR o IMPAR, o solo deja en Blanco: ');
            if (parOinpar===""){
                parOinpar = undefined;
            }
            let docena:string | undefined=readline.question('Ingrese 1ra Docena, 2da Docena o 3ra Docena, o solo deja en Blanco: ');
            if (docena===""){
                docena = undefined;
            }
            let altoObajo:string | undefined=readline.question('Ingrese Numero ALTO o Numero BAJO, o solo deja en Blanco: ');
            if (altoObajo===""){
                altoObajo = undefined;
            }

            let turningTurnOne: TurningTurn = new TurningTurn(1,newCasino,rouletteOne,playerOne,value,pleno,color,parOinpar,docena,altoObajo)
            turningTurnOne.turning()
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
            let value:number=readline.questionInt('')
            playGame(4,value);
            subMenuCraps();
            break;
        case 2:
            gameInformation(4);
            callGame(4);
            break;
    }
}
function subMenuCraps():void{
    console.log('Elija una opción');
    console.log('1: JUGAR OTRA VEZ');
    console.log('2: COBRAR Y SALIR');
    let gameOption:number=readline.questionInt();
    switch(gameOption){
        case 1:
            crapsMenu(1);
            break;
        case 2:
            console.log(`Se retiró con ${playerOne.getFoundsAvailable()} créditos.`);
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
                /*case 3:
                    newFounds=roulette1.playRoulette(value);
                    break;
                case 4:
                    newFounds=craps1.playCraps(value);
            break;*/
            }
        } else {
        console.log(`No tiene fondos para esta apuesta`);
        }
    playerOne.setFoundsAvailable(newFounds);
    newCasino.setTreasury(newFounds);
    console.log(`Le quedan ${playerOne.getFoundsAvailable()} créditos.`);
}
function replayGame(game:number,times:number,value:number):void{
        for(let i:number=0;i<times;i++){
            if(playerOne.getFoundsAvailable()>=times*value){
                playGame(game,value);
            } else {
                console.log(`No tiene fondos para esta apuesta.`);
            }
        }
}
function gameInformation(index:number):void{
    let text:string=clasificationText[index].toString();
    console.log(text);
}
