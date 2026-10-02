const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://siddhesh:siddhesh2410@discussion.x7ndm.mongodb.net/?retryWrites=true&w=majority&appName=discussion");
    const connection = mongoose.connection;
    connection.on('connected',() => {
        console.log("Connected to DB");
    })
    connection.on("error", (error)=>{
        console.log("Something wrong in mongodb ", error);
    })
}
module.exports = connectDB;