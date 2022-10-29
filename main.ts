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

export let reelSlot1:ReelSlot=new ReelSlot(1001,reelSlotBet,"Animal",9,20,3,10000);
export let progressiveSlot1:ProgressiveSlot=new ProgressiveSlot(2001,progressiveSlotBet,"Egipcio",25,25,5,5,500000);

let reelSlotList:ReelSlot[]=[reelSlot1];
let progressiveSlotList:ProgressiveSlot[]=[progressiveSlot1];

export let newCasino:Casino=new Casino('Atlanta',progressiveSlotList,reelSlotList,500000);

function welcome():void{
    let text:string=clasificationText[0].toString()
    console.log(text);
    main();
}
function main():void{
    console.log('Ingrese 1 y oprima ENTER para acceder al menú del casino.');
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
    console.log('Para acceder a un juego ingrese un numero y oprima ENTER.');
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
        console.log('Elija una opción y oprima ENTER');
        console.log('1: JUGAR');
        console.log('2: LEER INFORMACION DEL JUEGO');
        console.log('0: Volver al menú anterior');
        let reelOption:number=readline.questionInt();
        reelSlot(reelOption);
        break; 
        case 2:
        console.log('Elija una opción y oprima ENTER');
        console.log('1: JUGAR');
        console.log('2: ELEGIR LINEAS');
        console.log('3: LEER INFORMACION DEL JUEGO');
        console.log('0: Volver al menú anterior');
        let progressiveOption:number=readline.questionInt();
        progressiveSlot(progressiveOption);
        break;
        case 3:
        console.log('Elija una opción y oprima ENTER');
        console.log('1: JUGAR');
        console.log('2: LEER INFORMACION DEL JUEGO');
        console.log('0: Volver al menú anterior');
        let rouleteOption:number=readline.questionInt();
        roullete(rouleteOption);
        break;
        case 4:
        console.log('Elija una opción y oprima ENTER');
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
function reelSlot(option:number):void{
    switch(option){
        case 0:
        games();
        break;
        case 1:
        let value:number=readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ')
        playReel(value);
        subMenuReel();
        break;
        case 2:
        let text:string=clasificationText[1].toString();
        console.log(text);
        console.log(`Ingrese 1 para volver al menú anterior:`);
        let backMenu:number=readline.questionInt();
        callGame(backMenu);
        break;
    }
}
function playReel(value:number):number{
    let newFounds=reelSlot1.playReelSlot(value);
        if(newFounds>0){
        founds+=newFounds;
        newCasino.subtractAmount(value);
    } else {
        newCasino.addAmount(value);
        founds-=value;
    }
    console.log(`Le quedan ${founds} creditos.`);
    return newFounds;
}         
function replayReel(times:number,value:number):void{
    for(let i:number=0;i<times;i++){
        if(founds>=times*value){
        playReel(value);
        } else{
        throw Error('No tiene fondos para esta apuesta.')
        }
    }  
}
function subMenuReel():void{
    console.log('Elija una opción y oprima ENTER');
    console.log('1: JUGAR OTRA VEZ');
    console.log('2: REPETIR JUGADAS');
    console.log('3: COBRAR Y SALIR');
    let gameOption:number=readline.questionInt();
    switch(gameOption){
        case 1:
        reelSlot(1);
        break;
        case 2:
        let times:number=readline.questionInt('Ingrese la cantidad de repeticiones:');
        let value:number=readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ')
        replayReel(times,value);
        subMenuReel();
        break;
        case 3:
        console.log(`Se retiró con ${founds} creditos.`);
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
        let value:number=readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15 ): ')
        playProgressive(value);
        subMenuProgressive();
        break;
        case 2:
        let lines:number=readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ')
        setSlotLines(lines);
        callGame(2);
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
function playProgressive(value:number):number{
    let newFounds=progressiveSlot1.playProgressiveSlot(value);
    if(newFounds>0){
        founds+=newFounds;
        newCasino.subtractAmount(value * newFounds);
    } else {
        founds-=value*progressiveSlot1.getPayLine();
        newCasino.addAmount(value * founds);
    }
    console.log(`Le quedan ${founds} creditos.`);
    return newFounds;
}         
function replayProgressive(times:number,value:number):void{
    for(let i:number=0;i<times;i++){
        if(founds>=times*value*progressiveSlot1.getPayLine()){
        playProgressive(value);
        } else{
        throw Error('No tiene fondos para esta apuesta.')
        }
    }   console.log(`Le quedan ${founds} creditos.`);
}
function setSlotLines(lines:number):void{
    progressiveSlot1.setPayLine(lines);
}
function subMenuProgressive():void{
    console.log('Elija una opción y oprima ENTER');
    console.log('1: JUGAR OTRA VEZ');
    console.log('2: CAMBIAR LINEAS');
    console.log('3: REPETIR JUGADAS');
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
        replayProgressive(times,value);
        subMenuProgressive();
        case 4:
        console.log(`Se retiró con ${founds} creditos.`);
        main();
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
        playRoullete(value);
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
function playRoullete(value:number){
    console.log(`Le quedan ${founds} creditos.`);
}         
function replayRoullete(times:number,value:number):void{
    for(let i:number=0;i<times;i++){
        if(founds>=times*value){
        playRoullete(value);
        } else{
        throw Error('No tiene fondos para esta apuesta.')
        }
    }   console.log(`Le quedan ${founds} creditos.`);
}
/*function setSlotLines(lines:number):void{
    progressiveSlot1.setPayLine(lines);
}*/
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
        replayRoullete(times,value);
        subMenuRoullete();
        case 4:
        console.log(`Se retiró con ${founds} creditos.`);
        main();
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
        playCraps(value);
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
function playCraps(value:number){
    console.log(`Le quedan ${founds} creditos.`);
}         
function replayCraps(times:number,value:number):void{
    for(let i:number=0;i<times;i++){
        if(founds>=times*value){
        playCraps(value);
        } else{
        throw Error('No tiene fondos para esta apuesta.')
        }
    }   console.log(`Le quedan ${founds} creditos.`);
}
/*function setSlotLines(lines:number):void{
    progressiveSlot1.setPayLine(lines);
}*/
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
        replayCraps(times,value);
        subMenuCraps();
        case 4:
        console.log(newCasino.getTreasury());
        console.log(`Se retiró con ${founds} creditos.`);
        main();
        default:
        console.log(` -- El número ingresado es incorrecto ingrese un número valido ---`);
        subMenuCraps();
    }
} 

welcome();