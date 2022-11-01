"use strict";
exports.__esModule = true;
exports.Roulette = void 0;
var Roulette = /** @class */ (function () {
    function Roulette(p_id, p_numBlacks, p_numWhite, p_numRandom, p_numSelect, p_colorSelect, p_betValue, p_boxFound, p_playersList) {
        this._id = p_id;
        this._numBlacks = p_numBlacks;
        this._numWhite = p_numWhite;
        this._numRandom = p_numRandom;
        this._numSelect = p_numSelect;
        this._colorSelect = p_colorSelect;
        this._betValue = p_betValue;
        this._boxFound = p_boxFound;
        this._playersList = p_playersList;
    }
    Roulette.prototype.setId = function (p_id) {
        this._id = p_id;
    };
    Roulette.prototype.getId = function () {
        return this._id;
    };
    Roulette.prototype.setNumBlacks = function (p_numBlacks) {
        this._numBlacks = p_numBlacks;
    };
    Roulette.prototype.getNumBlacks = function () {
        return this._numBlacks;
    };
    Roulette.prototype.setNumWhite = function (p_numWhite) {
        this._numWhite = p_numWhite;
    };
    Roulette.prototype.getNumWhite = function () {
        return this._numWhite;
    };
    Roulette.prototype.setColorSelect = function (p_colorSelect) {
        this._colorSelect = p_colorSelect;
    };
    Roulette.prototype.getColorSelect = function () {
        return this._colorSelect;
    };
    Roulette.prototype.setBetValue = function (p_betValue) {
        this._betValue = p_betValue;
    };
    Roulette.prototype.getBetValue = function () {
        return this._betValue;
    };
    Roulette.prototype.setBoxFound = function (p_boxFound) {
        this._boxFound = p_boxFound;
    };
    Roulette.prototype.getBoxFound = function () {
        return this._boxFound;
    };
    Roulette.prototype.setPlayersList = function (p_playersList) {
        this._playersList = p_playersList;
    };
    Roulette.prototype.getNumRandom = function () {
        var min = Math.ceil(0);
        var max = Math.floor(38);
        this._numRandom = Math.floor(Math.random() * (max - min + 1) + min);
        return this._numRandom;
    };
    Roulette.prototype.setNumSelect = function (p_numSelect) {
        this._numSelect = p_numSelect;
    };
    return Roulette;
}());
exports.Roulette = Roulette;
