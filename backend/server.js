const app = require("./app")
const {PORT} = process.env

// server running
app.listen(PORT,()=>{
    console.log(`server is runing port at ${PORT}`)
})