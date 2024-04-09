const {mongoose}=require("./db");

const Schema=mongoose.Schema;
const RegistrationSchema=new Schema({
    email:{type:String,unique:true,},
    password:{type:String,unique:true,},
    phonenumber:{type:String,unique:true,},
    username:{type:String,unique:true,},
})


    const RegistrationModel=mongoose.model("Regitration",RegistrationSchema);

    module.exports={
        RegistrationModel,
    }