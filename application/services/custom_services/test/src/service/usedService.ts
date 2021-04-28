import { Request, Response } from 'express';
import {usedDao} from '../dao/usedDao';
import { CustomLogger } from '../config/Logger'
let used = new usedDao();

export class usedService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usedService.ts: GpDelete')
     const  usedId = req.params.id;
     used.GpDelete(usedId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usedService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usedService.ts: GpSearch')
     const  usedData = req.query;
     used.GpSearch(usedData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usedService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usedService.ts: GpSearchForUpdate')
     const  usedData = req.body;
     used.GpSearchForUpdate(usedData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usedService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usedService.ts: GpUpdate')
     const  usedData = req.body;
     used.GpUpdate(usedData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usedService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usedService.ts: GpGetAllValues')
     
     used.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from usedService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usedService.ts: GpCreate')
     const  usedData = req.body;
     used.GpCreate(usedData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usedService.ts: GpCreate')
         callback(response);
         });
    }


}