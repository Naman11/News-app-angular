import express from'express';
let router = express.Router();
import user from'../model/newsschema';

router.delete('/:_id',(req, res)=> {
  user.deleteOne({"_id": req.params._id},
   (err,user)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log("Deleted");
      res.json({user});
    }
  })
});
export default router;
