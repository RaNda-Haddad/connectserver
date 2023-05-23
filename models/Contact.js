//Require mongoose
const mongoose = require('mongoose');

//Create schema
const Schema = mongoose.Schema ;

//create contact schema
const contactSchema = new Schema ({
    name : {
        type : String ,
        required : true 
    },
    

    email : {
      type :  String ,
      required :true ,
      unique : true
    },

    phone : Number 

})

//export Schema
module.exports = Contact = mongoose.model('contact', contactSchema)







