"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(p_id, p_name, p_lastName, p_foundsAvailable) {
        this._id = p_id;
        this._name = p_name;
        this._lastName = p_lastName;
        this._foundsAvailable = p_foundsAvailable;
    }
    Player.prototype.setId = function (p_id) {
        this._id = p_id;
    };
    Player.prototype.getId = function () {
        return this._id;
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
    return Player;
}());
exports.Player = Player;
// instance player Test
var playerOne = new Player(1, "Daniel", "Jerez", 10000);
console.log(playerOne);
