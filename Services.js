const {RegistrationModel, BookingModel}=require("./Schema")
const {ObjectId}=require("mongodb");

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


const handleCreateBooking=(req,res)=>{

    BookingModel.create({
        ...req.body,
        cancelled:false
    }).then((dbresponse)=>{
        console.log(dbresponse,"booking dbresponse");
        res.send(dbresponse.username);
    }).catch((error)=>{
            console.log(error,"DbError");
            res.send("Booking Error");
        })


}

const handleRestaurantSlot=(req,res)=>{
console.log(req.body)
    const query= BookingModel .find({
   ...req.body,
    })
    query.select("selectedTime selectedSeat");;
    query.exec()
    .then((dbresponse)=>{
        console.log(dbresponse,"restaurantslot dbresponse");
        res.send(dbresponse);
    }).catch((error)=>{
            console.log(error,"DbError");
            res.send("restaurantslot Error");
        })

}

const fetchBookingForUser=(req,res)=>{
console.log(req.params.username);
const query =BookingModel.find({username:req.params.username,});
query.select("restaurantId selectedDate selectedTime selectedSeat ")
query.exec()
    .then((dbresponse)=>{
        console.log(dbresponse,"fetchBookingForUser dbresponse");
        res.send(dbresponse);
    }).catch((error)=>{
            console.log(error,"DbError");
            res.send("fetchBookingForUser Error");
        })
}

const cancelBooking=async(req,res)=>{
   console.log(req.params.bookingId)
    const _id=new ObjectId(req.params.bookingId);
    const filler={_id};
    const update={cancelled:true}
    const query=await BookingModel.findByIdAndUpdate(filler,update,{new:true});
    console.log(query,"query")
    if( query.cancelled){
        res.send("Cancelled Successfully.");
    }
    else{
        res.send("Cancel Failure.");
    }
}

module.exports={handleUserRegistration,handleUserLogin,handleCreateBooking,handleRestaurantSlot,fetchBookingForUser,cancelBooking}