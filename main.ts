import { ProgressiveSlot } from "./class/progressiveSlot";
import { ReelSlot } from "./class/reelSlot";
import { Roulette } from "./class/roulette";
import { Casino } from "./class/casino";
import { Player } from "./class/player";

import * as fs from 'fs';
let readline=require('readline-sync');
let information:string=fs.readFileSync('./files.txt/info.txt','utf-8');
let clasificationText:string[]=information.split('\\');
let founds:number=100000;
let progressiveSlotBet= [1,2,5,10,15];
let reelSlotBet = [5,10,15,20];
// paño de rulleta
let numberRed: number[] = new Array (1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35)

// instancio player
let playerOne: Player = new Player (1,"Daniel","Jerez",10000);
// instacio ruleta
let rouletteOne : Roulette = new Roulette(1,numberRed,0)

let reelSlot1:ReelSlot=new ReelSlot(1001,reelSlotBet,"Animal",9,20,3,10000);
let progressiveSlot1:ProgressiveSlot=new ProgressiveSlot(2001,progressiveSlotBet,"Egipcio",25,25,5,2,500000);



let rouletteList:Roulette[]=[rouletteOne]
let reelSlotList:ReelSlot[]=[reelSlot1];
let progressiveSlotList:ProgressiveSlot[]=[progressiveSlot1];
let newCasino:Casino=new Casino('Atlanta',progressiveSlotList,reelSlotList,rouletteList,500000);
//Informacion del casino
function welcome():void{
    gameInformation(0);
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
            playGame(1,value);
            subMenuReel()
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
            let value:number=readline.questionInt('Ingrese su apuesta ( 5 - 10 - 15 - 20 ): ')
            replayGame(1,times,value);
            subMenuReel();
            break;
        case 3:
            console.log(`Se retiró con ${founds} créditos.`);
            main();
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
            let value:number=readline.questionInt('Ingrese su apuesta ( 1 - 2 - 5 - 10 - 15 ): ');
            setSlotLines(lines);
            playGame(2,value);
            subMenuProgressiveSlot();
            break;
        case 2:
            gameInformation(2);
            callGame(2);
            break;
    }
}   
function setSlotLines(lines:number):void{
    progressiveSlot1.setPayLine(lines);
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
                let value:number=readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15): ');
                replayGame(2,times,value);
                setSlotLines(lines);
                subMenuProgressiveSlot();
                break;
            case 3:
                console.log(`Se retiró con ${founds} creditos.`);
                main();
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
            let value:number=readline.questionInt('')
            playGame(3,value);
            break;
        case 2:
            gameInformation(3);
            callGame(3);
        break;
    }
}
function subMenuRoulette():void{
    console.log('1: JUGAR \n2: REPETIR JUGADAS \n3: COBRAR Y SALIR');
    let gameOption:number=readline.questionInt();
        switch(gameOption){
            case 1:
                break;
            case 2:
                let times:number=readline.questionInt('Ingrese la cantidad de repeticiones:');
                for(let i:number=0;i<times;i++){
                    reelSlotMenu(1)
                }
                break;
            case 3:
                console.log(`Se retiró con ${founds} creditos.`);
                break;
            default:
                console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
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
            console.log(`Se retiró con ${founds} creditos.`);
            break;
        default:
            console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
            subMenuCraps();
    }
} 
function playGame(game:number,value:number):number{
    let newFounds=0;
    switch(game){
        case 1:
            newFounds=reelSlot1.playReelSlot(value);
            break;
        case 2:
            newFounds=progressiveSlot1.playProgressiveSlot(value);
            break;
        /*case 3:
            newFounds=roulette1.playRoulette(value);
            break;
        case 4:
            newFounds=craps1.playCraps(value);
            break;*/
    }if(newFounds>0){
        founds+=newFounds;
        newCasino.setTreasury(value);
    } else {
        newCasino.setTreasury(value);
        founds-=value;
    }
    console.log(`Le quedan ${founds} creditos.`);
    return newFounds;
}
function replayGame(game:number,times:number,value:number):void{
        for(let i:number=0;i<times;i++){
            if(founds>=times*value){
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
welcome();

