const express=require('express');
const Router=express.Router();
const bcrypt = require('bcryptjs');

// const fetchuser=require('../middleware/fetchuser')


const User=require('../models/user');





// The Model.create() method of the Mongoose API is used to create single or many documents in the collection. Mongoose by default triggers save() internally when we use the create() method on any model.
// to create a new user
Router.post('/register', 

async (req, res) => {
    try{
        let success=false
    

    var salt =await bcrypt.genSaltSync(10);
    var secPas = bcrypt.hashSync(req.body.password, salt);
    
    let p=await User.findOne({email:req.body.email});
    console.log(`value od p  is ${p}  value of email ${req.body.email}`);
    if(p){
        let msg=`User with ${req.body.email} already exist`;
        res.send({success,msg});
    }
    else{
    user= await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPas,

    });
    success=true;


    
    // now creatig auth token
    //  here data is second part of jwt that is payload
   
     //it require a data which is encoded on header portion for that we give it objectid bcz objectid is accessible in fstest way
    res.json({user,success});



    console.log(req.body);
    // res.send({secPas});
}
}
catch(err){
    console.log(err.message);
    res.send(err.message);

}
});

// jwt.verify return decoded payload


// Now we have to check for login info for existing user
Router.post('/login', 

async (req, res) => {
    try{
        let success=false;
        const email=req.body.email;
         
        const exist=await User.findOne({email});
        if(!exist){
            
            return res.status(401).send({success});
        }
        const r=await bcrypt.compare(req.body.password, exist.password);
        if(!r){
            return res.status(401).send("Wrong password");
        }
       
        success=true
        req.user=exist
        console.log(req.user)
       
        res.status(200).json({exist,success});
    }
    catch(err){
        res.send("Server error");
        console.log(err);
    }
});


// now we have to give authorization on the basic of auth key
// if auth key provided by broweer matches with auth key generated then acesss given 
// the server doesnot have stored the value of auth key in case jwt method 
// brower to give auth key for authentication form header portion the jwt key is stored
// from auth key we acn get payload that is dta when we fhave genrated auth key it thepayload was objectid
// middleware is the middle function given to router function or any fucntoino so after middleware gets fully compiled the 3rd function will compilke
// in middleware we comapre for the sauth key

// Router.post('/getuser',
// async (req,res)=>{
//     try{
//     obejctid=req.user.id;
//     const user_data=await User.findById(obejctid).select("-password");
//     res.send(user_data);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).send("Server Error");
//     }



// });








Router.get('/auth',(req,res)=>{
    res.send("heloooooo");
});
Router.get('/',(req,res)=>{
    res.send("THis is");
});
module.exports=Router