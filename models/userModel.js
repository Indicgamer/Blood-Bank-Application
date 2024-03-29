const { timeStamp } = require('console');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role:{
        type:String,
        required: [true, "Role is required"],
        enum: ['admin', 'organization','user','hospital'],
    },
    name:{
        type:String,
        required: function(){
            if(this.role === 'user' || this.role === 'admin'){
                return true;
            }
            return false;
        }
    },

    organizationName:{
        type:String,
        required: function(){
            if(this.role === 'organization'){
                return true;
            }
            return false;
        }
    },
    hospitalName:{
        type:String,
        required: function(){
            if(this.role === 'hospital'){
                return true;
            }
            return false;
        }
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    website: {
        type:String,
    },
    address: {
        type:String,
        required: [true, "Address is required"]
    },
    phone: {
        type:String,
        required: [true, "Phone number is required"]
    },
    

    
},{timestamps:true});

console.log(userSchema.path("_id"));

module.exports = mongoose.model('Users', userSchema);