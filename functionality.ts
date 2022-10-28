import { newCasino } from './main';
import * as fs from 'fs';
let readline=require('readline-sync');

    function welcome(){
        let welcome:string=fs.readFileSync('./files.txt/info.txt','utf-8');
        console.log(welcome);
        main();
    }
    function main():void{
        console.log('1: JUGAR');
        let opcion=readline.questionInt();
        switch(opcion){
            case 1:
                games();
                break;
            default:
            throw Error('Ingrese una opcion valida');
        }
    }   
    function games(){
        console.log('Elija un juego:');
        console.log('1: TRAGAMONEDAS TRADICIONAL');
        console.log('2: TRAGAMONEDAS PROGRESIVO');
        console.log('3: RULETA');
        console.log('4: DADOS');
        console.log('0: Volver al menu anterior');
        let opcion=readline.questionInt();
        callGame(opcion);
    }
    function callGame(opcion:number){
        switch(opcion){
            case 0:
            main();
            break;
            case 1:
            console.log('1: ELEGIR APUESTA');
            console.log('2: LEER REGLAS');
            console.log('0: Volver al menu anterior');
            let opcion=readline.questionInt();
            break;
        }
    }

welcome();

