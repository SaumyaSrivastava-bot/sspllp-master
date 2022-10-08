const mongoose = require('mongoose');
const validator = require('validator');

const eximregSchema = new mongoose.Schema({
    fname:
    {
        type: String,
        required: true,
    },
    dob:
    {
        type:Date,

        required:true,

    },
   tradeRole:
   {
      type:String,
      required:true,
   },

    email:
    {
        type: String,
        required: true,
    },
    mobileNumber:
    {
        type: String,
        required: true,
    },
    idType:
    {
        type:String,
     
    },
    idNumber:
    {
        type:String,
        
    },
    issuedAuthority:
    {
        type:String,
    
    },
    issuedCountry:
    {
        type:String,
    },
    jobTitle:
    {
        type:String,
    },
    country:
    {
        type: String,
        required: true,
    },
    companyName:
    {
        type:String,
        required:true,
    },
    companyType:
    {
        type:String,
        required:true,
    },
    address:
    {
        type:String,
    },
    state:
    {
        type:String,
    },
    city:
    {
        type:String,
    },
    pincode:
    {
        type:Number,
        required:true,
    },
    companyNumber:
    {
        type:String,
    },
    Landline:
    {
        type:String,
    },
    gstNumber:
    {
        type:String,
    },
    iecCode:
    {
        type:String,
    },
    currentAccount:
    {
        type:String,
    },
    aoCode:
    {
        type:String,
    },
    letsTalk:
    {
        type:String,
    },
    ifYes:
    {
        type:String,
    },
    alternateMobileNumber:
    {
        type:String,
    },
    noIdont:
    {
        type:String,
    },
    date:
    {
        type: Date,
        default: Date.now

    }
});
const Eximreg = new mongoose.model("Eximreg", eximregSchema);
module.exports = Eximreg;


