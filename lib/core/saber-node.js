"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: AK-12
 * @Date: 2019-01-11 21:41:32
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-12 13:15:21
 */
var readline_1 = require("readline");
var fs_1 = require("fs");
var path_1 = require("path");
/**
 * @exports Terminal
 */
var Terminal;
(function (Terminal) {
    /**
     * getUserInput
     * @param question
     */
    Terminal.getUserInput = function (question) {
        return new Promise(function (resolve) {
            var terminal = readline_1.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            terminal.question(question, function (answer) {
                terminal.close();
                resolve(answer.trim());
            });
        });
    };
})(Terminal = exports.Terminal || (exports.Terminal = {}));
/**
 * @exports Path
 */
var Path;
(function (Path) {
    /**
     * getFileName
     * @param path
     */
    Path.getFileName = function (path) {
        var solve = path.split('/');
        return solve[solve.length - 1];
    };
    /**
     * isExist
     * @param path
     */
    Path.isExist = function (path) {
        return new Promise(function (resolve) { return fs_1.exists(path, function (exists) { return resolve(exists); }); });
    };
})(Path = exports.Path || (exports.Path = {}));
/**
 * @exports File
 */
var File;
(function (File) {
    var _this = this;
    /**
     * createFile
     * @param {string} filePath
     * @param {string} value
     */
    File.createFile = function (filePath, value) { return __awaiter(_this, void 0, void 0, function () {
        var fileFolderPath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fileFolderPath = path_1.dirname(filePath);
                    return [4 /*yield*/, Path.isExist(fileFolderPath)];
                case 1:
                    if (!!(_a.sent())) return [3 /*break*/, 3];
                    return [4 /*yield*/, File.createPath(fileFolderPath)];
                case 2:
                    _a.sent();
                    fs_1.writeFile(filePath, value, 'utf-8', function (err) {
                        return !!err ? console.log(err) : null;
                    });
                    return [2 /*return*/];
                case 3:
                    fs_1.writeFile(filePath, value, 'utf-8', function (err) {
                        return !!err ? console.log(err) : null;
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    /**
     * createDir
     * @param path
     */
    File.createDir = function (path) {
        return new Promise(function (resolve) { return fs_1.mkdir(path, function () { return resolve(); }); });
    };
    /**
     * createFolder
     * @param {string} path
     * @returns {Promise<any>}
     */
    File.createPath = function (path) { return __awaiter(_this, void 0, void 0, function () {
        var exists;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Path.isExist(path)];
                case 1:
                    exists = _a.sent();
                    if (!exists) return [3 /*break*/, 2];
                    return [2 /*return*/];
                case 2: return [4 /*yield*/, File.createPath(path_1.dirname(path))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, File.createDir(path)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
})(File = exports.File || (exports.File = {}));
