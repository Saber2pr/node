/// <reference types="node" />
import { PathLike, Stats } from 'fs';
/**
 * @exports Terminal
 */
export declare namespace Terminal {
    /**
     * getUserInput
     * @param question
     */
    const getUserInput: (question: string) => Promise<string>;
    /**
     * getParams
     */
    const getParams: () => string[];
    /**
     * Print
     */
    namespace Print {
        /**
         * error
         * @param message
         */
        const error: (message: string) => void;
        /**
         * success
         * @param message
         */
        const success: (message: string) => void;
        /**
         * tips
         * @param message
         */
        const tips: (message: string) => void;
    }
}
/**
 * @exports Path
 */
export declare namespace Path {
    /**
     * getFileName
     * @param path
     */
    const getFileName: (path: string) => string;
    /**
     * isExist
     * @param path
     */
    const isExist: (path: string) => boolean;
    /**
     * slashCount
     * @param str
     */
    const slashCount: (str: string) => number;
    /**
     * makePathStep
     * @param num
     */
    const makePathStep: (num: number) => string;
    /**
     * split
     * @param name
     */
    const split: (name: string) => {
        str: string;
        type: string;
    };
}
/**
 * @exports File
 */
export declare namespace File {
    /**
     * createFile
     * @param {string} filePath
     * @param {string} value
     */
    const createFile: (filePath: string, value: string) => Promise<void>;
    /**
     * writeFileAsync
     * @param filePath
     * @param value
     */
    const writeFileAsync: (filePath: string, value: string) => Promise<{}>;
    /**
     * push
     * @param filePath
     * @param value
     */
    const push: (filePath: string, value: any) => Promise<NodeJS.ErrnoException>;
    /**
     * joinFile
     *
     * @export
     * @param {string} filePath
     * @param {string} anchorContent
     * @param {string} joinContent
     */
    function joinFile(filePath: string, anchorContent: string, joinContent: string): Promise<void>;
    /**
     * createDir
     * @param path
     */
    const createDir: (path: PathLike) => Promise<never>;
    /**
     * createFolder
     * @param {string} path
     * @returns {Promise<any>}
     */
    const createPath: (path: string) => Promise<any>;
    /**
     * read
     * @param path
     */
    const read: <T = string>(path: string) => Promise<T>;
    /**
     * readDir
     * @param filePath
     */
    const readDir: (filePath: string) => Promise<string[]>;
    /**
     * fileStat
     * @param filedir
     */
    const fileStat: (filedir: string) => Promise<Stats>;
    /**
     * dirDeepSearch
     *
     * @export
     * @param {string} dir
     * @returns
     */
    function dirDeepSearch(dir: string): Promise<string[]>;
    /**
     * dirDeepSearchAll
     *
     * @export
     * @param {string[]} dirs
     * @returns
     */
    function dirDeepSearchAll(dirs: string[]): Promise<string[]>;
    /**
     * remove
     * @param path
     */
    const remove: (path: string) => void;
    /**
     * json
     */
    namespace Json {
        /**
         * pipe
         * @param path
         */
        const pipe: <T>(path: string) => (callback: (fileData: T) => T) => Promise<void>;
        /**
         * read json
         * @param json
         */
        const read: <T>(json: string) => T;
    }
    /**
     * Node
     * @exports
     */
    namespace Node {
        /**
         * getPackageDir
         * @param packageName
         */
        const getPackageDir: (packageName: string) => string;
        /**
         * getPackageFiles
         * @param dir
         */
        const getPackageFiles: (dir: string) => Promise<string[]>;
    }
}
/**
 * Server
 */
export declare namespace Server {
    /**
     * create
     * @param port
     * @param rootDir
     */
    const create: (port: number, rootDir?: string) => import("http").Server;
}
