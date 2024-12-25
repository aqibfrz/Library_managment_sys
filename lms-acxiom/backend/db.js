const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/AQIB_LMS")


mongoose.connection.on("connected", ()=> {
    console.log('Database successfully connected...');
})

mongoose.connection.on("error", ()=> {
    console.log('Database connected fail...');
})

module.exports = mongoose