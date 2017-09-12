import express from'express';
let router = express.Router();
import user from'../model/newsschema';

router.put('/:_id',(req, res)=> {
  user.update({"_id": req.params._id},{$set:{
   "title": req.body.title}},{upsert:true},(err,user)=> {
    if(err){
      console.log(err);
    }
    else{
      console.log("Modified");
      res.json({user:user});
    }
  })
});
export default router;
