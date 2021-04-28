import * as mongoose from 'mongoose';
import usedModel from '../models/used';
import { CustomLogger } from '../config/Logger'


export class usedDao {
    private used = usedModel;
    constructor() { }
public GpDelete(usedId, callback){
new CustomLogger().showLogger('info', 'Enter into usedDao.ts: GpDelete')

this.used.findByIdAndRemove(usedId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usedDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(usedData, callback){
new CustomLogger().showLogger('info', 'Enter into usedDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(usedData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.used.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usedDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(usedData, callback){
new CustomLogger().showLogger('info', 'Enter into usedDao.ts: GpSearchForUpdate')

this.used.findOneAndUpdate({ _id: usedData._id }, usedData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usedDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(usedData, callback){
new CustomLogger().showLogger('info', 'Enter into usedDao.ts: GpUpdate')

this.used.findOneAndUpdate({ _id: usedData._id }, usedData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usedDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into usedDao.ts: GpGetAllValues')

this.used.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usedDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(usedData, callback){
new CustomLogger().showLogger('info', 'Enter into usedDao.ts: GpCreate')
let temp = new usedModel(usedData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usedDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}