const mongoose = require('mongoose')

const Schema = mongoose.Schema ;

const userfeedback = new Schema({

    customername : String , 
    Billno : String , 
    Contactno : Number , 
    feedBack : String, 

})

const feedback = mongoose.model('userfeedback' , userfeedback)

module.exports = feedback ;