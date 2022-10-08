const mongoose = require('mongoose');
const validator = require('validator');

const pimgSchema = new mongoose.Schema({
   
   
    email:
    {
        type: String,
       

    },
    img:
    {
        
      type: String
    }

  

});
const Imgprofile = new mongoose.model("Imgprofile", pimgSchema);
module.exports = Imgprofile;


