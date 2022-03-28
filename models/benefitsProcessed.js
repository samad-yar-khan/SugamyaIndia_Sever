const mongoose = require('mongoose');

const processedBenefits = new mongoose.Schema({
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    benefit : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Benefit'
    },
    approved : {
        type:Boolean,
        require:true,
        default:false
    },
    pending :{ 
        type : Boolean,
        default : true
    },
} , {
    timestamps:true
})

const ProcessedBenefit = mongoose.model('ProcessedBenefit' , processedBenefits);

module.exports = ProcessedBenefit;