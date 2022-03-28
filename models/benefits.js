const mongoose = require('mongoose');

const benefitSchema = new mongoose.Schema({

    benefit_name :{
        type:String,
        required:true
    },
    benefit_code : {
        type:String,
        required:true
    },

},{
    timestamps:true
});

const Benefit = mongoose.model('Benefit' , benefitSchema);

module.exports = Benefit;