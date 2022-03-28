const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
    camp_name :{
        type:String,
        required:true
    },
    city :{
        type:String,
        required:true
    },
    state : {
        type:String,
        required:true
    },
    pincode :{
        type:String,
        required:true
    },
    address :{
        type:String,
        default:""
    },
    ngo :{
        type:String,
        default:""
    },
    camp_date : {
        type: Date,
        default:Date.now
    }
},{
    timestamps:true
});

const Camp = mongoose.model('Camp' , campSchema);

module.exports = Camp;