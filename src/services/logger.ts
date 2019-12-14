
import { injectable } from '../../node_modules/inversify';
import "reflect-metadata";
import { ILogger } from "../interfaces/interfaces";
import TYPES from "../types";

@injectable()
export class Logger implements ILogger {
    public debug(message: string): void {
        console.log(`DEBUG: ${message}`);
    }
    public info(message: string): void {
        console.log(`INFO: ${message}`);
    }
}