const roleModel =require("./../../db/models/role");
const taskModel = require("./../../db/models/task"); 
const userModel = require("./../../db/models/user");

const adminAuthorization=async(req,res,next)=>{
    try{
        const roleId=req.token.role;
        const result= await roleModel.findById(roleId);
       
        if(result.role==="admin")
        {
            next();
        }else{
            return res.status(403).json({message:"admin forbidden"});
        }

    }catch{
        res.status(403).json(error);
    }
}

const userAuthorization=async (req,res,next)=>{
    try{
        const tokenId=req.token.id;
        const result=taskModel.find(roleId);
        console.log("tokenId",tokenId);
        
        if(tokenId===req.body.userId)
        {
            next();
        }else{
            return res.status(403).json({message:"user forbidden"});
        }

    }catch{
        res.status(403).json(error);
    }
}
module.exports={adminAuthorization,userAuthorization};