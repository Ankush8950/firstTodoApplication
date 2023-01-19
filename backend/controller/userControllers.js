// user model
const User = require("../model/userModel")

// logic
// Home router
exports.home = (req,res)=>{
    res.send("This is a Home page")
}


// user create router
exports.createUser =async (req,res) => {
    try {
    console.log(req.body)
    const {name,email,description} = req.body;
    if(!(name && email && description)){
        res.status(401).send("All details are required")
    }

    const userExits = await User.findOne({email})

    if(userExits){
        res.send("user already exits")
    }

    const user = await User.create({
        name,
        email,
        description
    })


    res.status(201).json({
        success:true,
        message:"user create successful",
        user
    })

    } catch (error) {
        console.log(error.message)
    }
}

//  get the all data in frontend
exports.getUser=async (req,res)=>{
    try {
        const user = await User.find()
        res.status(200).json({
            success:true,
            message:"get data successfull",
            user
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
}

//  search of name
exports.searchUser = async (req,res) =>{
    try {
        const data = await User.find({
            "$or":[
                {name: {$regex:req.params.id}}
            ]
        })

        res.status(200).json({
            success:true,
            message:"user find sucessfull",
            data
        })
    } catch (error) {
        console.log(error);
    }
}

// update all details
exports.editUser =async (req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            success:true,
            message:"user update successfull",
            
        })
    } catch (error) {
        res.status(401).json({
            success:false,
            message:error.message,

        })
    }
}


// delete user 
exports.deleteUser = async (req,res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message:"user deleted successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
}