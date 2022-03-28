const mongoose = require('mongoose');

const processedBenefits = new mongoose.Schema({

    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    disability : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Benefit'
    },
    approved : {
        type:Boolean,
        require:true,
        default:false
    }

} , {
    timestamps:true
})

const ProcessedBenefit = mongoose.model('ProcessedBenefit' , processedBenefits);

module.exports = ProcessedBenefit;