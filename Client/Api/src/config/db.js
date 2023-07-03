const mongoose = require('mongoose');



const DB_URI = "mongodb+srv://NikolasZR:137946280@midb.1bu3h5d.mongodb.net/?retryWrites=true&w=majority"

module.exports = () => {
    mongoose.connect(DB_URI)
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err));
}

