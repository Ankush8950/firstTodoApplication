// database connection
const mongoose = require("mongoose")

const connectDB = (()=>{
    mongoose.connect(process.env.MONGODB_URL,{
         useNewUrlParser: true,
         useUnifiedTopology: true
    })
    .then((conn)=>{
        console.log(`connected mongodb: ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log(err.message)
        process.exit(1)
    })
})

module.exports = connectDB