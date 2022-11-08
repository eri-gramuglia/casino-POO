"use strict";
exports.__esModule = true;
exports.newPlayer = void 0;
var progressiveSlot_1 = require("./class/progressiveSlot");
var reelSlot_1 = require("./class/reelSlot");
var roulette_1 = require("./class/roulette");
var casino_1 = require("./class/casino");
var player_1 = require("./class/player");
var craps_1 = require("./class/craps");
//Modulos
var fs = require("fs");
var readline = require('readline-sync');
var information = fs.readFileSync('./files.txt/info.txt', 'utf-8');
var clasificationText = information.split('\\');
//Instancia Jugador
var playerOne;
//Instancias tragamonedas
var progressiveSlotBet = [1, 2, 5, 10, 15];
var reelSlotBet = [5, 10, 15, 20];
var reelSlotOne = new reelSlot_1.ReelSlot(1001, reelSlotBet, "Animal", 9, 20, 3, 10000);
var progressiveSlotOne = new progressiveSlot_1.ProgressiveSlot(2001, progressiveSlotBet, "Egipcio", 25, 25, 5, 2);
var reelSlotList = [reelSlotOne];
var progressiveSlotList = [progressiveSlotOne];
//Instancia ruleta
var betOptionOne = [];
var betValueOne = [];
var rouletteOne = new roulette_1.Roulette(1, 0, betValueOne, betOptionOne);
var rouletteList = [rouletteOne];
//Instancia dados
var craps1 = new craps_1.Craps(4001);
var crapsList = [craps1];
//Instancia casino
var casinoBox = Number(fs.readFileSync('./files.txt/casinoBox.txt', 'utf-8'));
var newCasino = new casino_1.Casino('Atlanta', progressiveSlotList, reelSlotList, rouletteList, crapsList, casinoBox);
// Funcion para carga de jugador
function newPlayer() {
    var age = readline.questionInt("Ingrese su edad para verificar si es mayor: ");
    playerOne = new player_1.Player(age, '', '', 0);
    if (playerOne.verifyAge()) {
        var name_1 = readline.question("Ingrese su nombre: ");
        var founds = readline.questionInt("Ingrese los fondos que desea utilizar:");
        playerOne.setName(name_1);
        playerOne.setFoundsAvailable(founds);
        welcome();
    }
}
exports.newPlayer = newPlayer;
//Informacion del casino
function welcome() {
    gameInformation(0);
    console.log("Bienvenido ".concat(playerOne.getName(), ", sus fondos disponibles son ").concat(playerOne.getFoundsAvailable(), " cr\u00E9ditos."));
    main();
}
// Funcion de inicio para el menu del casino
function main() {
    console.log('Oprima 1 para empezar a jugar.');
    var option = readline.questionInt();
    switch (option) {
        case 1:
            games();
            break;
        default:
            console.log('Ingrese una opción valida');
            main();
    }
}
// Menu de juegos
function games() {
    console.log('Elija su juego.');
    console.log('1: TRAGAMONEDAS TRADICIONAL');
    console.log('2: TRAGAMONEDAS PROGRESIVO');
    console.log('3: RULETA');
    console.log('4: DADOS');
    console.log('0: Volver al inicio');
    var option = readline.questionInt();
    callGame(option);
}
// Llamado a cada juego
function callGame(option) {
    switch (option) {
        case 0:
            main();
            break;
        case 1:
            gameOptions();
            var reelOption = readline.questionInt();
            reelSlotMenu(reelOption);
            break;
        case 2:
            gameOptions();
            var progressiveOption = readline.questionInt();
            progressiveSlotMenu(progressiveOption);
            break;
        case 3:
            gameOptions();
            var rouleteOption = readline.questionInt();
            rouletteMenu(rouleteOption);
            break;
        case 4:
            gameOptions();
            var crapsOption = readline.questionInt();
            crapsMenu(crapsOption);
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero v\u00E1lido ---");
            games();
    }
}
// Opciones de cada
function gameOptions() {
    console.log('Elija una opción. \n1: JUGAR \n2: LEER INFORMACION DEL JUEGO \n0: Volver al menú anterior');
}
/* Funcionalidades de tragamonedas tradicional */
function reelSlotMenu(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var value = readline.questionInt('Ingrese apuesta ( 5 - 10 - 15 - 20 ): ');
            if (reelSlotOne.verifyBet(value)) {
                playGame(1, value);
            }
            subMenuReel();
            break;
        case 2:
            gameInformation(1);
            callGame(1);
            break;
    }
}
function subMenuReel() {
    console.log('1: JUGAR \n2: MULTIPLICAR JUGADAS \n3: CAMBIAR JUEGO \n4: SALIR');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            reelSlotMenu(1);
            break;
        case 2:
            var times = readline.questionInt('Ingrese la cantidad de repeticiones:');
            var value = readline.questionInt('Ingrese su apuesta ( 5 - 10 - 15 - 20 ): ');
            if (reelSlotOne.verifyBet(value)) {
                replayGame(1, times, value);
            }
            subMenuReel();
            break;
        case 3:
            games();
            break;
        case 4:
            console.log("".concat(playerOne.getName(), " se retir\u00F3 con ").concat(playerOne.getFoundsAvailable(), " cr\u00E9ditos."));
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuReel();
    }
}
/* Funcionalidades de tragamonedas progresivo */
function progressiveSlotMenu(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var lines = readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ');
            if (progressiveSlotOne.verifyLines(lines)) {
                var value = readline.questionInt('Ingrese su apuesta ( 1 - 2 - 5 - 10 - 15 ): ');
                if (progressiveSlotOne.verifyBet(value)) {
                    setSlotLines(lines);
                    playGame(2, value);
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
function setSlotLines(lines) {
    progressiveSlotOne.setPayLine(lines);
}
function subMenuProgressiveSlot() {
    console.log('1: JUGAR \n2: MULTIPLICAR JUGADAS \n3: CAMBIAR JUEGO \n4: SALIR');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            progressiveSlotMenu(1);
            break;
        case 2:
            var times = readline.questionInt('Ingrese la cantidad de repeticiones:');
            var lines = readline.questionInt('Ingrese cantidad de lineas 1 - 2 - 3 - 4- 5: ');
            if (progressiveSlotOne.verifyLines(lines)) {
                var value = readline.questionInt('Ingrese apuesta ( 1 - 2 - 5 - 10 - 15): ');
                if (progressiveSlotOne.verifyBet(value)) {
                    replayGame(2, times, value);
                    setSlotLines(lines);
                }
            }
            subMenuProgressiveSlot();
            break;
        case 3:
            games();
            break;
        case 4:
            console.log("".concat(playerOne.getName(), " se retir\u00F3 con ").concat(playerOne.getFoundsAvailable(), " cr\u00E9ditos."));
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuProgressiveSlot();
    }
}
/* Funcionalidades de ruleta */
function rouletteMenu(option) {
    var betValueList = [];
    var betOptionLis = [];
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var auxFounds = playerOne.getFoundsAvailable();
            betValueList[0] = readline.questionInt('Ingrese su apuesta a un Numero: ');
            while (betValueList[0] > auxFounds) {
                console.log("Fondos Insuficientes");
                betValueList[0] = readline.questionInt('Ingrese su apuesta nuevamente: ');
            }
            var pleno = readline.questionInt('Ingrese Numero entre 1 y 36 para PLENO: ');
            while (pleno < 1 || pleno > 36) {
                pleno = readline.questionInt('Ingrese Numero entre 1 y 36 para PLENO: ');
            }
            auxFounds = auxFounds - betValueList[0];
            var color = void 0;
            var p_color = readline.questionInt('Ingrese Color para Jugar, Para ROJO (1), para NEGRO (2) o Pasar (3): ');
            if (p_color)
                switch (p_color) {
                    case 1:
                        color = "ROJO";
                        betOptionLis[1] = color;
                        betValueList[1] = readline.questionInt("Ingrese su apuesta a color ".concat(color, ": "));
                        while (betValueList[1] > auxFounds) {
                            console.log("Fondos Insuficientes");
                            betValueList[1] = readline.questionInt('Ingrese su apuesta nuevamente: ');
                        }
                        break;
                    case 2:
                        color = "NEGRO";
                        betOptionLis[1] = color;
                        betValueList[1] = readline.questionInt("Ingrese su apuesta a color ".concat(color, ": "));
                        while (betValueList[1] > auxFounds - betValueList[0]) {
                            console.log("Fondos Insuficientes");
                            betValueList[1] = readline.questionInt('Ingrese su apuesta nuevamente: ');
                        }
                        break;
                    case 3:
                        color = "";
                        betValueList[1] = 0;
                        break;
                    default:
                        console.log("El valor Ingresado es Invalido, no se jugara por este Item");
                        break;
                }
            auxFounds = auxFounds - betValueList[1];
            var parOinpar = void 0;
            var p_parOinpar = readline.questionInt('Ingrese PAR (1) o IMPAR (2) o Pasar (3): ');
            switch (p_parOinpar) {
                case 1:
                    parOinpar = "PAR";
                    betOptionLis[2] = parOinpar;
                    betValueList[2] = readline.questionInt("Ingrese su apuesta para ".concat(parOinpar, ": "));
                    while (betValueList[2] > auxFounds) {
                        console.log("Fondos Insuficientes");
                        betValueList[1] = readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 2:
                    parOinpar = "IMPAR";
                    betOptionLis[2] = parOinpar;
                    betValueList[2] = readline.questionInt("Ingrese su apuesta para ".concat(parOinpar, ": "));
                    while (betValueList[2] > auxFounds) {
                        console.log("Fondos Insuficientes");
                        betValueList[2] = readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 3:
                    parOinpar = "";
                    betValueList[2] = 0;
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item");
                    break;
            }
            auxFounds = auxFounds - betValueList[2];
            var docena = void 0;
            var p_docena = readline.questionInt('Ingrese 1ra Docena (1), 2da Docena (2) o 3ra Docena (3), o Pasar (4): ');
            switch (p_docena) {
                case 1:
                    docena = "1ra Docena";
                    betOptionLis[3] = docena;
                    betValueList[3] = readline.questionInt("Ingrese su apuesta para ".concat(docena, ": "));
                    while (betValueList[3] > auxFounds) {
                        console.log("Fondos Insuficientes");
                        betValueList[3] = readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 2:
                    docena = "2da Docena";
                    betOptionLis[3] = docena;
                    betValueList[3] = readline.questionInt("Ingrese su apuesta para ".concat(docena, ": "));
                    while (betValueList[3] > auxFounds) {
                        console.log("Fondos Insuficientes");
                        betValueList[3] = readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 3:
                    docena = "3da Docena";
                    betOptionLis[3] = docena;
                    betValueList[3] = readline.questionInt("Ingrese su apuesta para ".concat(docena, ": "));
                    while (betValueList[3] > auxFounds) {
                        console.log("Fondos Insuficientes");
                        betValueList[3] = readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 4:
                    docena = "";
                    betValueList[3] = 0;
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item");
                    break;
            }
            auxFounds = auxFounds - betValueList[3];
            var altoObajo = void 0;
            var p_altoObajo = readline.questionInt('Apostar a Numero ALTO (1) o Numero BAJO(2), Pasar (3): ');
            switch (p_altoObajo) {
                case 1:
                    altoObajo = "Numero ALTO";
                    betOptionLis[4] = altoObajo;
                    betValueList[4] = readline.questionInt("Ingrese su apuesta para ".concat(altoObajo, ": "));
                    while (betValueList[3] > auxFounds) {
                        console.log("Fondos Insuficientes");
                        betValueList[4] = readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 2:
                    altoObajo = "Numero BAJO";
                    betOptionLis[4] = altoObajo;
                    betValueList[4] = readline.questionInt("Ingrese su apuesta para ".concat(altoObajo, ": "));
                    while (betValueList[3] > auxFounds) {
                        console.log("Fondos Insuficientes");
                        betValueList[4] = readline.questionInt('Ingrese su apuesta nuevamente: ');
                    }
                    break;
                case 3:
                    altoObajo = "";
                    break;
                default:
                    console.log("El valor Ingresado es Invalido, no se jugara por este Item");
                    break;
            }
            rouletteOne.setBetOption(betOptionLis);
            rouletteOne.setBetValue(betValueList);
            var betResoult = rouletteOne.toTurn();
            var betResulteFinal = 0;
            for (var i = 0; i < betResoult.length; i++) {
                betResulteFinal = betResulteFinal + betResoult[i];
                //console.log(betResulteFinal)
            }
            playerOne.setFoundsAvailable(playerOne.getFoundsAvailable() + betResulteFinal);
            console.log("----------------------------------------------------------------");
            console.log("Su saldo actual es de: ".concat(playerOne.getFoundsAvailable()));
            console.log("----------------------------------------------------------------");
            // let rouletteOne: Roulette = new Roulette();(countTurns+1,newCasino,rouletteOne,playerOne,value,pleno,color,parOinpar,docena,altoObajo)
            // turningTurnOne.turning()
            console.log("----------------------------------------------------------------");
            subMenuRoulette();
            //callGame(3)
            //playGame(3,value);
            break;
        case 2:
            gameInformation(3);
            callGame(3);
            break;
    }
}
function subMenuRoulette() {
    console.log('1: JUGAR \n2: COBRAR Y SALIR \n3: Volver al menú anterior');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            rouletteMenu(1);
            break;
        case 2:
            console.log("----------------------------------------------------------------");
            console.log("Su saldo actual es de: ".concat(playerOne.getFoundsAvailable()));
            console.log("----------------------------------------------------------------");
            //console.log(`Se retiró con ${founds} creditos.`);
            break;
        case 3:
            games();
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuRoulette();
    }
}
/* Funcionalidades de dados */
function crapsMenu(option) {
    switch (option) {
        case 0:
            games();
            break;
        case 1:
            var value = readline.questionInt('Ingrese su apuesta: ');
            playGame(3, value);
            subMenuCraps();
            break;
        case 2:
            gameInformation(4);
            callGame(4);
            break;
    }
}
function subMenuCraps() {
    console.log('1: JUGAR \n2: CAMBIAR JUEGO \n3: SALIR');
    var gameOption = readline.questionInt();
    switch (gameOption) {
        case 1:
            crapsMenu(1);
            break;
        case 2:
            games();
            break;
        case 3:
            console.log("".concat(playerOne.getName(), " se retir\u00F3 con ").concat(playerOne.getFoundsAvailable(), " cr\u00E9ditos."));
            break;
        default:
            console.log(" -- El n\u00FAmero ingresado es incorrecto ingrese un n\u00FAmero valido ---");
            subMenuCraps();
    }
}
function playGame(game, value) {
    var aux = false;
    var newFounds = 0;
    if (playerOne.getFoundsAvailable() >= value) {
        aux = true;
    }
    if (aux) {
        switch (game) {
            case 1:
                newFounds = reelSlotOne.playReelSlot(value);
                break;
            case 2:
                newFounds = progressiveSlotOne.playProgressiveSlot(value);
                break;
            case 3:
                newFounds = craps1.obtenerPremio(value);
                break;
        }
        playerOne.setFoundsAvailable(playerOne.getFoundsAvailable() + newFounds);
        newCasino.setTreasury(newFounds);
        console.log("Le quedan ".concat(playerOne.getFoundsAvailable(), " cr\u00E9ditos."));
    }
    else {
        console.log("No tiene fondos para esta apuesta");
    }
}
function replayGame(game, times, value) {
    if (playerOne.getFoundsAvailable() >= times * value) {
        for (var i = 0; i < times; i++) {
            playGame(game, value);
        }
    }
    else {
        console.log("No tiene fondos para esta apuesta.");
    }
}
function gameInformation(index) {
    var text = clasificationText[index].toString();
    console.log(text);
}
