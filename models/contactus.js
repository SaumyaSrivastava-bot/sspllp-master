const mongoose = require('mongoose');
const validator = require('validator');

const contactusSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
   
    email:
    {
        type: String,
        required: true,
    },
    mobile:
    {
        type: Number,
        required: true,
    },
    query:
    {
        type: String,
        required: true,
    },

    date:
    {
        type: Date,
        default: Date.now

    }


});
const Queries = new mongoose.model("Queries", contactusSchema);
module.exports = Queries;


