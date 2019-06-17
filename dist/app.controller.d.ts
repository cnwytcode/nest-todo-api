import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    index(res: Response): import("express-serve-static-core").Response;
    page404(): void;
    getHello(): string;
    getVersion(): Object;
    postIndex(): Object;
}
