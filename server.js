const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const { bgCyan } = require("colors");
const connectDb = require("./config/config");
require("colors");
const path = require('path');


//CONFIG ENV
dotenv.config()
connectDb()

//create rest obj from express
const app= express()

//creating middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("dev"))

 // creating routes  
//  app.get('/' ,(req,res) =>
//  {
//     res.send("<h1>EATSEASE BACKEND</h1>")
//  });

app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billsRoute"));

// static  file access
app.use(express.static(path.join(__dirname , "./client/build")))
app.get('*' , function(req,res)
{
      res.sendFile(path.join(__dirname,"./client/build/index.html"))
}) 

 //creating port
 const PORT = process.env.PORT || 8080

  // Listening
  app.listen(PORT, () =>
  {
        console.log(`Server Running on PORT ${PORT}` .bgCyan.white);
  });