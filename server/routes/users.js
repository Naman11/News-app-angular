import express from'express';
let router = express.Router();
import user from'../model/newsschema';

router.post('/',(req, res, next)=> {
   user.create(req.body,(err,user)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log("Post Method");
      res.json({user});
    }
  })
});
export default router;
// import express from'express';
// let router = express.Router();
// import user from'../model/newsschema';

// router.post('/',(req, res, next)=> {
//   let author = req.body.author;
//   let title = req.body.title;
//   let description = req.body.description;
//   let urlToImage=req.body.urlToImage;

//    user.insertMany(req.body,(err,user)=>{
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log("Post Method");
//       res.json({user});
//     }
//   })
// });
// export default router;
