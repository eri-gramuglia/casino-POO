"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(p_age, p_name, p_lastName, p_foundsAvailable) {
        this._age = p_age;
        this._name = p_name;
        this._lastName = p_lastName;
        this._foundsAvailable = p_foundsAvailable;
    }
    Player.prototype.setAge = function (p_age) {
        this._age = p_age;
    };
    Player.prototype.getAge = function () {
        return this._age;
    };
    Player.prototype.setName = function (p_name) {
        this._name = p_name;
    };
    Player.prototype.getName = function () {
        return this._name;
    };
    Player.prototype.setLastName = function (p_lastName) {
        this._lastName = p_lastName;
    };
    Player.prototype.getLastName = function () {
        return this._lastName;
    };
    Player.prototype.setFoundsAvailable = function (p_foundsAvailable) {
        this._foundsAvailable = p_foundsAvailable;
    };
    Player.prototype.getFoundsAvailable = function () {
        return this._foundsAvailable;
    };
    Player.prototype.verifyAge = function () {
        var aux = false;
        if (this.getAge() >= 18) {
            aux = true;
        }
        else {
            console.log('Debe ser mayor de edad para ingresar al casino.');
        }
        return aux;
    };
    return Player;
}());
exports.Player = Player;
// instance player Test
/* let playerOne: Player = new Player (1,"Daniel","Jerez",10000);
console.log (playerOne); */
