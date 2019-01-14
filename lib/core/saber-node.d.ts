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
     * push
     * @param filePath
     * @param value
     */
    const push: (filePath: string, value: any) => Promise<NodeJS.ErrnoException>;
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
    const read: (path: string) => Promise<string>;
    /**
     * json
     */
    namespace Json {
        /**
         * pipe
         * @param path
         */
        const pipe: <T>(path: string) => (callback: (fileData: T) => T) => Promise<void>;
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
