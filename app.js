require("dotenv").config();
const express =require("express")
const mongoose = require("mongoose")
const port = process.env.PORT || 4545;
const url = "mongodb+srv://qx1PwURLScP8trwl:qx1PwURLScP8trwl@cluster0.jtswd.mongodb.net/foodDB?retryWrites=true&w=majority"

const app = express()

mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("Successful")
})

app.get("/", (req, res) => {
    res.send("server is ready")
    res.end();
})

app.listen(port, () => {
    console.log(`server is listening to: ${port}`)
})