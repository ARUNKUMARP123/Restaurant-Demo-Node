const mongoose=require("mongoose");
mongoose.set("strictQuery",false);


const mongodb_URL="mongodb+srv://arun841988:arun1998@restaurant-booking.hmgvkwa.mongodb.net/Restaurant-Booking"

const connectdb=async(res)=>{
    try {
        await mongoose.connect(mongodb_URL);
        if(mongoose.connection.readyState===2){
            res &&  res.send("Connecting......!")
        }
        if(mongoose.connection.readyState===1){
            res&& res.send("Connected.")
        }
    } catch (error) {
        console.log(error,"connection failed");
       res && res.send("Dis-Connected.")
    }
   
}


module.exports={connectdb,mongoose,}