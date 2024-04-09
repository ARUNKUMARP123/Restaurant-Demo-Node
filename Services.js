const {RegistrationModel}=require("./Schema")

const   handleUserRegistration = (req,res) => {
 RegistrationModel.create({
    ...req.body,
 }).then((dbresponse)=>{
    console.log(dbresponse,"dbresponse");
    res.send(dbresponse.username);
})
    .catch((error)=>{
        console.log(error,"Create Error");
        res.send("Create Error")
    })
}


const handleUserLogin=(req,res)=>{
    RegistrationModel.findOne({
        username:req.body.username,

    }).then((dbresponse)=>{
        console.log(dbresponse,"dbresponse");
        res.send(dbresponse.username);
    })
        .catch((error)=>{
            console.log(error,"DbError");
            res.send("Login Error");
        })
}


module.exports={handleUserRegistration,handleUserLogin}