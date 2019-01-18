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
 * @Last Modified time: 2019-01-14 09:15:46
 */
var readline_1 = require("readline");
var fs_1 = require("fs");
var path_1 = require("path");
var http_1 = require("http");
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
    /**
     * getParams
     */
    Terminal.getParams = function () { return process.argv.slice(2); };
    /**
     * Print
     */
    var Print;
    (function (Print) {
        /**
         * error
         * @param message
         */
        Print.error = function (message) {
            return console.log("\u001B[31m" + message + "\u001B[37m");
        };
        /**
         * success
         * @param message
         */
        Print.success = function (message) {
            return console.log("\u001B[32m" + message + "\u001B[37m");
        };
        /**
         * tips
         * @param message
         */
        Print.tips = function (message) {
            return console.log("\u001B[34m" + message + "\u001B[37m");
        };
    })(Print = Terminal.Print || (Terminal.Print = {}));
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
    Path.isExist = function (path) { return fs_1.existsSync(path); };
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
     * push
     * @param filePath
     * @param value
     */
    File.push = function (filePath, value) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    fs_1.appendFile(filePath, value, function (err) { return resolve(err); });
                })
                /**
                 * createDir
                 * @param path
                 */
            ];
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
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Path.isExist(path)];
                case 1:
                    if (!_a.sent()) return [3 /*break*/, 2];
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
    /**
     * read
     * @param path
     */
    File.read = function (path) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    return fs_1.readFile(path, function (err, res) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            var str = res.toString();
                            resolve(str);
                        }
                    });
                })
                /**
                 * readDir
                 * @param filePath
                 */
            ];
        });
    }); };
    /**
     * readDir
     * @param filePath
     */
    File.readDir = function (filePath) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    return fs_1.readdir(filePath, function (err, files) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(files);
                        }
                    });
                })
                /**
                 * fileStat
                 * @param filedir
                 */
            ];
        });
    }); };
    /**
     * fileStat
     * @param filedir
     */
    File.fileStat = function (filedir) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    return fs_1.stat(filedir, function (err, stats) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(stats);
                        }
                    });
                })
                /**
                 * dirDeepSearch
                 *
                 * @export
                 * @param {string} dir
                 * @returns
                 */
            ];
        });
    }); };
    /**
     * dirDeepSearch
     *
     * @export
     * @param {string} dir
     * @returns
     */
    function dirDeepSearch(dir) {
        return __awaiter(this, void 0, void 0, function () {
            var result, search;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        search = function (dir) { return __awaiter(_this, void 0, void 0, function () {
                            var files, _i, files_1, filename, filedir, stats;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, File.readDir(dir)];
                                    case 1:
                                        files = _a.sent();
                                        _i = 0, files_1 = files;
                                        _a.label = 2;
                                    case 2:
                                        if (!(_i < files_1.length)) return [3 /*break*/, 7];
                                        filename = files_1[_i];
                                        filedir = path_1.join(dir, filename);
                                        return [4 /*yield*/, File.fileStat(filedir)];
                                    case 3:
                                        stats = _a.sent();
                                        if (!stats.isFile()) return [3 /*break*/, 4];
                                        result.push(filedir);
                                        return [3 /*break*/, 6];
                                    case 4:
                                        if (!stats.isDirectory()) return [3 /*break*/, 6];
                                        return [4 /*yield*/, search(filedir)];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6:
                                        _i++;
                                        return [3 /*break*/, 2];
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, search(dir)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    }
    File.dirDeepSearch = dirDeepSearch;
    /**
     * dirDeepSearchAll
     *
     * @export
     * @param {string[]} dirs
     * @returns
     */
    function dirDeepSearchAll(dirs) {
        return __awaiter(this, void 0, void 0, function () {
            var result, _i, dirs_1, dir, files;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        _i = 0, dirs_1 = dirs;
                        _a.label = 1;
                    case 1:
                        if (!(_i < dirs_1.length)) return [3 /*break*/, 4];
                        dir = dirs_1[_i];
                        return [4 /*yield*/, File.dirDeepSearch(dir)];
                    case 2:
                        files = _a.sent();
                        result.push.apply(result, files);
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    }
    File.dirDeepSearchAll = dirDeepSearchAll;
    /**
     * remove
     * @param path
     */
    File.remove = function (path) {
        var files = [];
        if (fs_1.existsSync(path)) {
            files = fs_1.readdirSync(path);
            files.forEach(function (file) {
                var curPath = path + '/' + file;
                if (fs_1.statSync(curPath).isDirectory()) {
                    File.remove(curPath);
                }
                else {
                    fs_1.unlinkSync(curPath);
                }
            });
            fs_1.rmdirSync(path);
        }
    };
    /**
     * json
     */
    var Json;
    (function (Json) {
        var _this = this;
        /**
         * pipe
         * @param path
         */
        Json.pipe = function (path) { return function (callback) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        _b = (_a = File).createFile;
                        _c = [path];
                        _e = (_d = JSON).stringify;
                        _f = callback;
                        _h = (_g = JSON).parse;
                        return [4 /*yield*/, File.read(path)];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_e.apply(_d, [_f.apply(void 0, [_h.apply(_g, [_j.sent()])]),
                                null,
                                2])]))];
                    case 2: return [2 /*return*/, _j.sent()];
                }
            });
        }); }; };
    })(Json = File.Json || (File.Json = {}));
    /**
     * Node
     * @exports
     */
    var Node;
    (function (Node) {
        var _this = this;
        /**
         * getPackageDir
         * @param packageName
         */
        Node.getPackageDir = function (packageName) {
            return process.cwd() + "/node_modules/" + packageName;
        };
        /**
         * getPackageFiles
         * @param dir
         */
        Node.getPackageFiles = function (dir) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, File.dirDeepSearch(Node.getPackageDir(dir))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
    })(Node = File.Node || (File.Node = {}));
})(File = exports.File || (exports.File = {}));
/**
 * Server
 */
var Server;
(function (Server) {
    var _this = this;
    /**
     * getFromRequest
     * @param req
     */
    var getFromRequest = function (req) {
        return new Promise(function (resolve, reject) {
            var str = '';
            req.on('data', function (data) { return (str += data); });
            req.on('end', function () { return resolve(str); });
            req.on('error', function (err) { return reject(err); });
        });
    };
    /**
     * requestListener
     * @param req
     * @param res
     * @param rootDir
     */
    var requestListener = function (rootDir) { return function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var url, data_fromReq;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = path_1.resolve(rootDir + req.url);
                    if (!(req.method === 'GET')) return [3 /*break*/, 1];
                    File.read(url)
                        .then(function (data) { return res.write(data); })
                        .then(function () { return res.end(); })
                        .catch(function (err) { return console.log(err); });
                    return [2 /*return*/];
                case 1:
                    if (!(req.method === 'POST')) return [3 /*break*/, 4];
                    return [4 /*yield*/, getFromRequest(req)];
                case 2:
                    data_fromReq = _a.sent();
                    return [4 /*yield*/, Path.isExist(url)];
                case 3:
                    if (_a.sent()) {
                        File.push(url, data_fromReq)
                            .then(function () { return res.end(); })
                            .catch(function (err) { return console.log(err); });
                    }
                    else {
                        File.createFile(url, data_fromReq)
                            .then(function () { return res.end(); })
                            .catch(function (err) { return console.log(err); });
                    }
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); }; };
    /**
     * create
     * @param port
     * @param rootDir
     */
    Server.create = function (port, rootDir) {
        if (rootDir === void 0) { rootDir = '/'; }
        return http_1.createServer(requestListener(rootDir)).listen(port, 'localhost', function () {
            return console.log("http://localhost:" + port + "/index.html");
        });
    };
})(Server = exports.Server || (exports.Server = {}));
