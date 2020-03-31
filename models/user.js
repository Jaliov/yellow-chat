const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  name:     { type: String, required: true },
  usertype: { type: String, required: true },  
  company:  { type: String }, 
  street:   { type: String },
  city:     { type: String },
  state:    { type: String }, 
  zip:      { type: String }, 
  email:    { type: String },
  phone:    { type: String },
  website:  { type: String },
  image:    { type: String },
  loginid:  { type: String },
  yellowchatlink: { type: String },
  categories:[]  
});

const User = mongoose.model("User", userSchema);

module.exports = User;


