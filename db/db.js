const mongoose = require('mongoose');
const db = "mongodb+srv://echo:vivek@cluster0.wunp6zs.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db).then(() => {
    console.log("connection successfull");
}).catch((err) => {
    console.log("connection failed");
});