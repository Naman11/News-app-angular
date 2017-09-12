const mongoose = require('mongoose');
mongoose.set('debug',true);
const bcrypt = require('bcrypt');    //To encrypt the value of password

let MySchema=new mongoose.Schema({
	name:String,
	email:{type:String,unique:true},
	password:String,
	confPassword:String

},{collection:'register',versionKey : false});

// Saves the user's password hashed 
MySchema.pre('save', function (next) {  
  let user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// Create method to compare password input to password saved in database
MySchema.methods.comparePassword = function(pw, cb) {  
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

 let model=mongoose.model('register',MySchema);
module.exports=model;