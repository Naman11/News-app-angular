import express from 'express';
import config from './config/config';
import passport from 'passport';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';
import http from 'http';
import users from './routes/users';
import getval from './routes/getval';
import update from './routes/update';
import deleteval from  './routes/delete';
import login from './routes/login';
import register from './routes/register';
import jwt from 'jsonwebtoken'; 
import passportJwt from 'passport-jwt';
import User from './model/registerschema';

const cors= require('cors');
const app = express();

//Used to connect with other server eg angular
app.use(cors());
//Used to convert into json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Initialise passport for use
app.use(passport.initialize());
require('./config/passport')(passport);
//to call specified route
app.use('/update',update);
app.use('/getval',getval);
app.use('/users', users);
app.use('/deleteval',deleteval);
app.use('/login',login);
app.use('/register',register);


let apiRoutes= express.Router();


apiRoutes.post('/register',function(req,res){
	if(!req.body.email || !req.body.password){
		res.json({ success: false, message: 'please enter correct mailId or Password'});
	}
	else{
		var newUser=new User({
			name:req.body.name,
			email:req.body.email,
			password:req.body.password,
			confPassword:req.bodyconfPassword
		})

	newUser.save(function(err){
		if(err){
			return res.json({success:false, message:'email already exist'});
		}
		res.json({ success:true,message: 'successfully registered '});
		});
	}
});


apiRoutes.post('/authenticate', function(req, res) {  
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
        	console.log(user);
          var token = jwt.sign({ id:req.body.id, email:req.body.email }, config.secret, {
            expiresIn: 20000
          });
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
        }
      });
    }
  });
});

apiRoutes.get('/login',passport.authenticate('jwt',{session:false}),
	function(req,res){
		res.send('It worked!! Id is: '+ req.user.email);
	});

app.use('/api',apiRoutes);

app.use((req,res,next)=>{
	let err=new Error('Not Found');
	err.status(404);
	next(err);
});


//Setting up the connection with DataBase(Mongodb)
mongoose.connect(config.dbUrl);		
mongoose.connection.on('connected',()=>{
	console.log("Successfully Connected")
});
mongoose.connection.on('error',()=>{
	console.log("Error in Connecting");
});
//Creates log file
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));

app.listen(3003);//port no to run server

module.exports= app;