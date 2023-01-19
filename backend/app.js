require("dotenv").config()
const express = require("express")
const userRouter = require("./router/userRouter")
const connectDB = require("./config/db")
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectDB()
app.use("/", userRouter);

module.exports = app;