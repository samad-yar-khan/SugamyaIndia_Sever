const mongoose = require('mongoose');

const disabilitySchema = new mongoose.Schema({

    disability_name :{
        type:String,
        required:true
    },
    disability_code : {
        type:String,
        required:true
    },

},{
    timestamps:true
});

const Disability = mongoose.model('Disability' , disabilitySchema);

module.exports = Disability;