const mongose = require("mongoose")
const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
const owurl = 'mongodb+srv://carRent:carRentalApp@car-rental-app.1q8e4gu.mongodb.net/admin_login'
const ownerFunction = () =>{
    mongose.connect(owurl).then(()=>{
        console.log("connected api")
    }).catch(err=>console.log(err))
}
var email = ''
var userEmail = ''

ownerFunction()
//owner schema
const owner = mongose.Schema({
    name:String,
    email:String,
    mobile:String,
    password:String,
    details:Object,
    booking:Object,
    payment:Object
})
//user data Schema
const user = mongose.Schema({
    name:String,
    email:String,
    password:String,
    mobile:String,
    booking:Object,
    payment:Object
})
// admin data schema
const admin = mongose.Schema({
    name:String,
    password:String
})

const ownerModel = mongose.model("logins",owner)
const userModel = mongose.model("userSignUp",user)

//getting owner email while login
app.post('/',(req,res)=>{
    email = req.body.email;
})

//getting user email
app.post('/user',(req,res)=>{
    userEmail = req.body.email;
})

//all owners cars api 
app.get('/allCars',(req,res)=>{
    ownerModel.find({}).then((val)=>{
        details = []
        val.forEach((e)=>{
            details.push(e.details)
        })
        // console.log(details)
        res.send(details)
    })
})

//adding cars api
app.post('/ownerCarDetails/addCar/',(req,res)=>{
    ownerModel.find({email:email}).then((val)=>{
        if(val[0].details !== null && val[0].details !== undefined)
            details = [...val[0].details,req.body]
        else
            details = [req.body]
        ownerModel.updateOne(
            {name:val[0].name},
            {
                $set:{
                    details:details
                }
            }
        ).then(()=>{
            res.send("success")
        }).catch(err => res.send(err))
    })
})

//all owner cars api
app.get('/ownerCars/all/',(req,res)=>{
    ownerModel.find({email:email}).then((val)=>{
        if(val.length === 0 || val[0].details === undefined || val[0].details === null || val[0].details === '')
            res.send('no')
        else
            res.send(val[0].details)
    })
})
//owner registers
app.post('/owner/signup/',(req,res)=>{
    ownerModel.find({email:req.body.email}).then((val)=>{
        if(val.length === 0){
            ownerModel.insertMany(req.body).then((data)=>{
                res.send("Successfully Registered")
            })
        }else{
            res.send("Email already exists")
        }
    })
})

//user registers
app.post('/user/signup/',(req,res)=>{
    userModel.find({email:req.body.email}).then((val)=>{
        if(val.length === 0){
            userModel.insertMany(req.body).then((data)=>{
                res.send("Successfully Registered")
            })
        }else{
            res.send("Email already exists")
        }
    })
})

//user all cars
app.post('/user/allcars',(req,res) =>{
    ownerModel.find({}).then((val) =>{
        cars = []
        val.forEach((v) =>{
            cars.push(v.details)
        })
    })
})
//updating booking status
app.post('/all/booking',(req,res)=>{
    const email = req.body.email;
    ownerModel.find({email:email}).then((val)=>{
        let booking = []
        if(val[0].booking !== undefined && val[0].booking !== null )
            booking = [...val[0].booking,req.body]
        else
            booking = [req.body]
        ownerModel.updateOne(
            {name:val[0].name},
            {
                $set:{
                    booking:booking
                }
            }
        ).then(()=>{
            res.send("success")
        }).catch(err => console.log(err))
    })
    userModel.find({email:userEmail}).then((val)=>{
        let booking = []
        if(val[0].booking !== undefined && val[0].booking !== null )
            booking = [...val[0].booking,req.body]
        else
            booking = [req.body]
        userModel.updateOne(
            {name:val[0].name},
            {
                $set:{
                    booking:booking
                }
            }
        ).then(()=>{
            res.send("success")
        }).catch(err => console.log(err))
    })
})
//getting user Payments
app.get('/user/payments',(req,res)=>{
    userModel.find({email:userEmail}).then((val)=>{
        if(val[0].payment !== null && val[0].payment !== undefined){
            res.send(val[0].payment)
        }else{
            res.send(['no'])
        }
    })
})
//getting user bookings
app.get('/user/bookings',(req,res)=>{
    userModel.find({email:userEmail}).then((val)=>{
        if(val[0].booking !== null && val[0].booking !== undefined)
            res.send(val[0].booking)
        else
            res.send(['no'])
            
    }).catch(err=>{
        console.log(err)
        res.send(['no'])
    })
})


//getting owner Payments
app.get('/owner/payments',(req,res)=>{
    ownerModel.find({email:email}).then((val)=>{
        if(val[0].payment !== null && val[0].payment  !== undefined){
            res.send(val[0].payment)
        }else{
            res.send(['no'])
        }
    })
})
//getting owner bookings
app.get('/owner/bookings',(req,res)=>{
    ownerModel.find({email:email}).then((val)=>{
        // console.log(val)
        if(val[0].booking !== null && val[0].booking  !== undefined ){
            res.send(val[0].booking)
        }else{
            res.send(['no'])
        }
    })
})

//payments 
app.post('/all/payments',(req,res)=>{
    const email = req.body.email;
    ownerModel.find({email:email}).then((val)=>{
        let payment = []
        if(val[0].payment !== null && val[0].payment  !== undefined)
            payment = [...val[0].payment,req.body]
        else
            payment = [req.body]
        ownerModel.updateOne(
            {email:email},
            {
                $set:{
                    payment:payment
                }
            }
        ).then(()=>{
            res.send("success")
        }).catch(err => console.log(err))
    })
    userModel.find({email:userEmail}).then((val)=>{
        let payment = []
        if(val[0].payment !== null && val[0].payment !== undefined)
            payment = [...val[0].payment,req.body]
        else
            payment = [req.body]
        userModel.updateOne(
            {email:userEmail},
            {
                $set:{
                    payment:payment
                }
            }
        ).then(()=>{
            res.send("success")
        }).catch(err => console.log(err))
    })
})


//ownerlogins
app.post('/owner/logins',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    ownerModel.find({email:email}).then((val)=>{
        if(val.length !== 0){
            if(val[0].password === password)
                res.send(val[0])
            else
                res.send("incorrect crediantials")
        }
        else
            res.send("login details not found")
    })
})
//user logins
app.post('/user/logins',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    userModel.find({email:email}).then((val)=>{
        if(val.length !== 0){
            if(val[0].password === password)
                res.send(val[0])
            else
                res.send("incorrect crediantials")
        }
        else
            res.send("login details not found")
    })
})

// all owners cars for user api
app.get('/user/cars',(req,res) => {
    ownerModel.find({}).then((val) => {
        let carContainer = [];
        val.forEach((e) => {
            if (e.details !== null && e.details !== undefined) {
                e.details.forEach((ele) => {
                    carContainer.push({
                        owEmail: e.email,
                        name: ele.name,
                        image: ele.image,
                        liId: ele.carId,
                        price: ele.price,
                    });
                });
            }
        });
        // console.log(carContainer);
        res.send(carContainer);
    }).catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
})


app.listen(1001,()=>{
    console.log("server port 1001")
})
