/// <reference types="node" />
import { PathLike } from 'fs';
/**
 * @exports Terminal
 */
export declare namespace Terminal {
    /**
     * getUserInput
     * @param question
     */
    const getUserInput: (question: string) => Promise<string>;
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
    const isExist: (path: string) => Promise<boolean>;
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
}
