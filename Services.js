const {RegistrationModel, BookingModel}=require("./Schema")

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


module.exports={handleUserRegistration,handleUserLogin,handleCreateBooking,handleRestaurantSlot}