import { Request, Response, NextFunction } from "express";
import { usedController } from '../controller/usedController';


export class Routes {
    private used: usedController = new usedController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/used/:id').delete(this.used.GpDelete);
app.route('/used/get/search').get(this.used.GpSearch);
app.route('/used/get/update').put(this.used.GpSearchForUpdate);
app.route('/used').put(this.used.GpUpdate);
app.route('/used').get(this.used.GpGetAllValues);
app.route('/used').post(this.used.GpCreate);
     }

}