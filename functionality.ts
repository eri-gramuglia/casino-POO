import { newCasino, reelSlot1 } from './main';
import * as fs from 'fs';
let readline=require('readline-sync');
let information:string=fs.readFileSync('./files.txt/info.txt','utf-8');
let clasificationText:string[]=information.split('\\');
let founds:number=100000;

    function welcome():void{
        let text:string=clasificationText[0].toString()
        console.log(text);
        main();
    }
    function main():void{
        console.log('1: MENU');
        let option:number=readline.questionInt();
        switch(option){
            case 1:
                games();
                break;
            default:
            throw Error('Ingrese una opción valida');
        }
    }   
    function games():void{
        console.log('Elija una opción:');
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
            console.log('1: JUGAR');
            console.log('2: LEER REGLAS');
            console.log('0: Volver al menú anterior');
            let reelOption:number=readline.questionInt();
            reelSlot(reelOption);
            break; 
            case 2:
            console.log('1: ELEGIR APUESTA');
            console.log('2: LEER REGLAS');
            console.log('0: Volver al inicio');
            let progressiveOption:number=readline.questionInt();
        break;
    }
}
    function reelSlot(option:number):void{
        switch(option){
            case 0:
            games();
            break;
            case 1:
            let value:number=readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ')
            play(value);
            subMenu();
            break;
            case 2:
            let text:string=clasificationText[1].toString();
            console.log(text);
            console.log(`1: Volver atras:`);
            let backMenu:number=readline.questionInt();
            callGame(backMenu);
            break;
        }
    }
    function play(value:number):number{
        let newFounds=reelSlot1.playReelSlot(value);
        if(newFounds>0){
            founds+=newFounds;
        } else if(newFounds===0){
            newCasino.addAmount(value);
            founds-=value;
        } else {
            founds+=reelSlot1.getWell();
        } 
        console.log(`Le quedan ${founds} creditos.`);
        return newFounds;
    }         
    
    function replay(times:number,value:number):void{
        for(let i:number=0;i<times;i++){
            if(founds>=times*value){
            play(value);
            } else{
            throw Error('No tiene fondos para esta apuesta.')
            }
        }   console.log(`Le quedan ${founds} creditos.`);
    }
    function subMenu():void{
        console.log('1: JUGAR OTRA VEZ');
        console.log('2: REPETIR JUGADAS');
        console.log('3: COBRAR Y SALIR');
        let gameOption:number=readline.questionInt();
        if(gameOption===1){
            reelSlot(1);
        } else if(gameOption===2){
            let times:number=readline.questionInt('Ingrese la cantidad de repeticiones:');
            let value:number=readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ')
            replay(times,value);
            subMenu();
        } else if(gameOption===3){7
            console.log(`Se retiró con ${founds} creditos.`);
            main();
        }
    }
welcome();

