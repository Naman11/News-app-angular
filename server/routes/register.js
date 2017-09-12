let express =require('express');
let value =require( '../model/registerschema');
let router = express.Router();
router.post('/',(req,res)=>{
	value.create(req.body,(err,data)=>{
		if(err){
			res.send('error');
		}
		else
			{
			console.log("Post Method");
			res.json(data);
		}
	
	});
});

module.exports =router;