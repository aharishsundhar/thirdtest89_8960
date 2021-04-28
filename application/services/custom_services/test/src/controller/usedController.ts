import { Request, Response } from 'express';
import { usedService } from '../service/usedService';
import { CustomLogger } from '../config/Logger'
let used = new usedService();

export class usedController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
used.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usedController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usedController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
used.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usedController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usedController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
used.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usedController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usedController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
used.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usedController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usedController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
used.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usedController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usedController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
used.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usedController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usedController.ts: GpCreate');
    })}


}