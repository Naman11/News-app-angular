let express =require('express');
let value =require( '../model/registerschema');
let router = express.Router();
router.get('/', (req,res) => {
	value.find({},(err,data) => {
		if(err){
			console.log(err);
			res.send(err);
		}
		else{
			console.log("Login Get Method");
			res.json(data);
		}
	})
});
module.exports =router;
