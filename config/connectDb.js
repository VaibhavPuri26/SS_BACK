const mongoose = require('mongoose') //import mongoose
const colors = require('colors')
//create fn to connect to database
//try and catch to catch error
const connectDb = async () => {
    try{ 
        //we wait for connection to establish
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server is Running On ${mongoose.connection.host}`.bgCyan.white);
    }
    catch(error) {
        console.log(`${errorfound}`, colors.bgRed)
    }
}
module.exports = connectDb