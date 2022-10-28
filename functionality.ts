import { newCasino, reelSlot1, progressiveSlot1 } from './main';
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
            console.log('1: JUGAR');
            console.log('2: ELEGIR LINEAS');
            console.log('3: LEER REGLAS');
            console.log('0: Volver al menú anterior');
            let progressiveOption:number=readline.questionInt();
            progressiveSlot(progressiveOption);
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
            playReel(value);
            subMenuReel();
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
    function playReel(value:number):number{
        let newFounds=reelSlot1.playReelSlot(value);
        if(newFounds>0){
            console.log(`Felicidades ganó ${newFounds*value} creditos.`);
            founds+=newFounds;
        } else if(newFounds===0){
            console.log(`Suerte para la proxima, acaba de perder ${value} creditos.`);
            newCasino.addAmount(value);
            founds-=value;
        } else {
            console.log(`Felicidades gano el pozo!! ${reelSlot1.getWell()}.`);
            founds+=reelSlot1.getWell();
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
        console.log('1: JUGAR OTRA VEZ');
        console.log('2: REPETIR JUGADAS');
        console.log('3: COBRAR Y SALIR');
        let gameOption:number=readline.questionInt();
        if(gameOption===1){
            reelSlot(1);
        } else if(gameOption===2){
            let times:number=readline.questionInt('Ingrese la cantidad de repeticiones:');
            let value:number=readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ')
            replayReel(times,value);
            subMenuReel();
        } else if(gameOption===3){
            console.log(`Se retiró con ${founds} creditos.`);
            main();
        }
    }

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
            console.log(`1: Volver atras:`);
            let backMenu:number=readline.questionInt();
            callGame(backMenu);
            break;
        }
    }
    function playProgressive(value:number):number{
        let newFounds=progressiveSlot1.playProgressiveSlot(value);
        if(newFounds>0){
            founds+=newFounds;
        } else if(newFounds===0){
            newCasino.addAmount(value);
            founds-=value;
        } else if(newFounds===-1) {
            console.log(`Felicidades acertó una linea de 7! Ganó ${value*500}.`);
            founds+= value* 500;
        } else if(newFounds===-2){
            console.log(`Felicidades acertó dos lineas de 7! Ganó ${value*1000}.`);
            founds+=value*1000;
        } else if(newFounds===-3){
            console.log(`Felicidades acertó tres lineas de 7! Ganó ${value*2000}`);
            founds+=value*2000;
        } else if(newFounds===-4){
            console.log(`Felicidades acertó cuatro lineas de 7! Ganó ${value*3000}`);
            founds+=value*3000;
        } else if(newFounds===-5){
            console.log(`¡¡¡Felicidades acertó el jackpot!!! Ganó ${progressiveSlot1.getJackpot()}`);
            founds+=value*progressiveSlot1.getJackpot();
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
        console.log('1: JUGAR OTRA VEZ');
        console.log('2: CAMBIAR LINEAS');
        console.log('3: REPETIR JUGADAS');
        console.log('4: COBRAR Y SALIR');
        let gameOption:number=readline.questionInt();
        if(gameOption===1){
            progressiveSlot(1);
        } else if(gameOption===2){
            let lines:number=readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ')
            setSlotLines(lines);
            subMenuProgressive();
        }else if(gameOption===3){
            let times:number=readline.questionInt('Ingrese la cantidad de repeticiones:');
            let value:number=readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15): ')
            replayProgressive(times,value);
            subMenuProgressive();
        } else if(gameOption===4){
            console.log(`Se retiró con ${founds} creditos.`);
            main();
        }
    }
welcome();

