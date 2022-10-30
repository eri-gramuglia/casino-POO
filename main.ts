import { ProgressiveSlot } from "./class/progressiveSlot";
import { ReelSlot } from "./class/reelSlot";
import { Casino } from "./class/casino";
import * as fs from 'fs';
let readline=require('readline-sync');
let information:string=fs.readFileSync('./files.txt/info.txt','utf-8');
let clasificationText:string[]=information.split('\\');
let founds:number=100000;
let progressiveSlotBet= [1,2,5,10,15];
let reelSlotBet = [5,10,15,20];

let reelSlot1:ReelSlot=new ReelSlot(1001,reelSlotBet,"Animal",9,20,3,10000);
let progressiveSlot1:ProgressiveSlot=new ProgressiveSlot(2001,progressiveSlotBet,"Egipcio",25,25,5,2,500000);

let reelSlotList:ReelSlot[]=[reelSlot1];
let progressiveSlotList:ProgressiveSlot[]=[progressiveSlot1];

export let newCasino:Casino=new Casino('Atlanta',progressiveSlotList,reelSlotList,500000);

function welcome():void{
    let text:string=clasificationText[0].toString()
    console.log(text);
    main();
}
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
function callGame(option:number):void{
    switch(option){
        case 0:
        main();
        break;
        case 1:
        console.log('Elija una opción.');
        console.log('1: JUGAR');
        console.log('2: LEER INFORMACION DEL JUEGO');
        console.log('0: Volver al menú anterior');
        let reelOption:number=readline.questionInt();
        reelSlotMenu(reelOption);
        break; 
        case 2:
        console.log('Elija una opción.');
        console.log('1: JUGAR');
        console.log('2: ELEGIR LINEAS');
        console.log('3: LEER INFORMACION DEL JUEGO');
        console.log('0: Volver al menú anterior');
        let progressiveOption:number=readline.questionInt();
        progressiveSlot(progressiveOption);
        break;
        case 3:
        console.log('Elija una opción.');
        console.log('1: JUGAR');
        console.log('2: LEER INFORMACION DEL JUEGO');
        console.log('0: Volver al menú anterior');
        let rouleteOption:number=readline.questionInt();
        roullete(rouleteOption);
        break;
        case 4:
        console.log('Elija una opción.');
        console.log('1: JUGAR');
        console.log('2: LEER INFORMACION DEL JUEGO');
        console.log('0: Volver al menú anterior');
        let crapsOption:number=readline.questionInt();
        craps(crapsOption);
        break;
        default:
        console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
        games();
}
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
                subMenuReel();
                break;
            case 2:
                let text:string=clasificationText[1].toString();
                console.log(text);
                console.log(`Volver al menú anterior:`);
                readline.questionInt();
                callGame(1);
            break;            
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
            newFounds=roullete1.playRoullete(value);
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
    function replayGame(game:number,times:number,value:number){
        for(let i:number=0;i<times;i++){
            if(founds>=times*value){
                playGame(game,value);
            } else {
                console.log(`No tiene fondos para esta apuesta.`);
                subMenuReel()
            }
        }
    }
function subMenuReel():void{
    console.log('Elija una opción.');
    console.log('1: JUGAR');
    console.log('2: MULTIPLICAR JUGADAS');
    console.log('3: COBRAR Y SALIR');
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
function progressiveSlot(option:number):void{
    switch(option){
        case 0:
        games();
        break;
        case 1:
        let value:number=readline.questionInt('Ingrese su apuesta ( 1 - 2 - 5 - 10 - 15 ): ')
        playGame(2,value);
        subMenuProgressive();
        break;
        case 2:
        let lines:number=readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ')
        setSlotLines(lines);
        progressiveSlot(1);
        subMenuProgressive();
        break;
        case 3:
        let text:string=clasificationText[2].toString();
        console.log(text);
        console.log(`2: Volver al menú anterior:`);
        let backMenu:number=readline.questionInt();
        callGame(backMenu);
        break;
    }
}   
function setSlotLines(lines:number):void{
    progressiveSlot1.setPayLine(lines);
}
function subMenuProgressive():void{
    console.log('Elija una opción.');
    console.log('1: JUGAR');
    console.log('2: ELEGIR CANTIDAD DE LINEAS');
    console.log('3: MULTIPLICAR JUGADAS');
    console.log('4: COBRAR Y SALIR');
    let gameOption:number=readline.questionInt();
    switch(gameOption){
        case 1:
        progressiveSlot(1);
        break;
        case 2:
        let lines:number=readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ')
        setSlotLines(lines);
        subMenuProgressive();
        break;
        case 3:
        let times:number=readline.questionInt('Ingrese la cantidad de repeticiones:');
        let value:number=readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15): ')
        replayGame(2,times,value);
        subMenuProgressive();
        case 4:
        console.log(`Se retiró con ${founds} creditos.`);
        default:
        console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
        subMenuProgressive();
    }
}
/* Funcionalidades de ruleta */
function roullete(option:number):void{
    switch(option){
        case 0:
        games();
        break;
        case 1:
        let value:number=readline.questionInt('')
        playGame(3,value);
        subMenuRoullete();
        break;
        /* case 3:
        let lines:number=readline.questionInt('')
        setSlotLines(lines);
        callGame(2);
        break;*/
        case 2:
        let text:string=clasificationText[3].toString();
        console.log(text);
        console.log(`2: Volver al menú anterior:`);
        let backMenu:number=readline.questionInt();
        callGame(backMenu);
        break;
    }
}
function subMenuRoullete():void{
    console.log('Elija una opción y oprima ENTER');
    console.log('1: JUGAR OTRA VEZ');
    console.log('2: CAMBIAR LINEAS');
    console.log('3: REPETIR JUGADAS');
    console.log('4: COBRAR Y SALIR');
    let gameOption:number=readline.questionInt();
    switch(gameOption){
        case 1:
        roullete(1);
        break;
        case 2:
        let lines:number=readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ')
        setSlotLines(lines);
        subMenuRoullete();
        break;
        case 3:
        let times:number=readline.questionInt('Ingrese la cantidad de repeticiones:');
        let value:number=readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15): ')
        replayGame(3,times,value);
        subMenuRoullete();
        case 4:
        console.log(`Se retiró con ${founds} creditos.`);
        default:
        console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
        subMenuRoullete();
    }
} 
/* Funcionalidades de dados */
function craps(option:number):void{
    switch(option){
        case 0:
        games();
        break;
        case 1:
        let value:number=readline.questionInt('')
        playGame(4,value);
        subMenuCraps();
        break;
        /*case 3:
        let lines:number=readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ')
        setSlotLines(lines);
        callGame(2);
        break;*/
        case 2:
        let text:string=clasificationText[4].toString();
        console.log(text);
        console.log(`2: Volver al menú anterior:`);
        let backMenu:number=readline.questionInt();
        callGame(backMenu);
        break;
    }
}
function subMenuCraps():void{
    console.log('Elija una opción y oprima ENTER');
    console.log('1: JUGAR OTRA VEZ');
    console.log('2: CAMBIAR LINEAS');
    console.log('3: REPETIR JUGADAS');
    console.log('4: COBRAR Y SALIR');
    let gameOption:number=readline.questionInt();
    switch(gameOption){
        case 1:
        craps(1);
        break;
        case 2:
        let lines:number=readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ')
        setSlotLines(lines);
        subMenuCraps();
        break;
        case 3:
        let times:number=readline.questionInt('Ingrese la cantidad de repeticiones:');
        let value:number=readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15): ')
        replayGame(4,times,value);
        subMenuCraps();
        case 4:
        console.log(newCasino.getTreasury());
        console.log(`Se retiró con ${founds} creditos.`);
        default:
        console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
        subMenuCraps();
    }
} 

welcome();