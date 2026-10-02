const express = require("express");
const cors = require("cors");
require("dotenv").config;
const connectDB = require("./config/connectDB");
//const app = express();
const router = require("./routes/routing");
const {app, server} = require("./socket/index");
app.use(express.json());

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}));

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.json({
        msg : "Server running at " + PORT
    })
})
app.use("/api", router);

connectDB().then(() =>{
    server.listen(PORT, () =>{
        console.log("Server running at " + PORT);
    })
})