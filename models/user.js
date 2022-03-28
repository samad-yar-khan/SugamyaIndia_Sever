const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required : false,
        unique :true
    },
    password:{
        type: String,
        required : true,
    },
    user_name:{
        type: String,
        required : true,
        unique :true
    },
    name_ :{
        type: String ,
        required : true
    },
    udid:{
        type : String,
        required : false
    },
    identifier:{
        type : String,
        required : false
    },
    age :{
        type: Number,
        required :false
    },
    state:{
        type: String,
        required: false
    },
    district:{
        type: String,
        required: false
    },
    city:{
        type: String,
        required: false
    },
    pincode: {
        type: String,
        required: false
    },
    income :{
        type: Number,
        required :false
    },
    beneficiary :{
        type: Boolean ,
        default : false,
    },
    official:{
        type: Boolean ,
        default : false,
        required : true
    },
    volunteer:{
        type: Boolean ,
        default :false,
        required : true
    },
    ngo:{
        type: Boolean ,
        default :false,
        required : true
    },
    verified:{
        type: Boolean ,
        default: false,
        required : true
    },
    ngo_name:{
        type: String,
        required: false
    },
    phone_number:{
        type: String,
        required: false
    }
},{
    timestamps:true //this is to  keep track of time at which  user is created and updated
});


userSchema.pre(
    'save',
    async function(next) {
      const user = this;
      const hash = await bcrypt.hash(this.password, 10);
  
      this.password = hash;
      next();
    }
  );

userSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}
  

const User = mongoose.model("User" , userSchema);
module.exports = User;
