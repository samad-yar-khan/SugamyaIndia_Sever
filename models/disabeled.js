const mongoose = require('mongoose');

const disabeledSchema = new mongoose.Schema({

    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    disability : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Disability'
    }

} , {
    timestamps:true
})

const Disabeled = mongoose.model('Disabeled' , disabeledSchema);

module.exports = Disabeled;