const {mongoose}=require("./db");

const Schema=mongoose.Schema;
const RegistrationSchema=new Schema({
    email:{type:String},
    password:{type:String,unique:true,},
    phonenumber:{type:String,unique:true,},
    username:{type:String,unique:true,},
})

const BookingSchema=new Schema({
    
restaurantId:{type:String},
selectedDate:{type:String},
selectedSeat:{type:Number},
selectedTime:{type:String},
username:{type:String},
})

const RegistrationModel=mongoose.model("Regitration",RegistrationSchema);

const BookingModel=mongoose.model("Booking",BookingSchema);


    module.exports={
        RegistrationModel,BookingModel,
    }