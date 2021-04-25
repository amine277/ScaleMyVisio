const router = require('express').Router();
const path = require('path');
const User = require('../src/User');
const Room = require('../src/Rooms');

//const { joinRoom } = require('../public/index');



function data_roomCreated(user,RoomId){

    


}

router.post('/infoRequest', async function(req,res){
    

    console.log("infoRequest")
    const user = await User.findOne({email:req.body.email})

   // console.log(roomId)


    res.send(user._id)




  });
  
router.post('/exitRoom',function(req,res){
     
    var Id = req.body.Id;

    res.send({value:true});
  });

router.post('/creatRoom', async function(req,res){
    var user_name = req.body.name;
    var roomName = req.body.roomId;
    var Id = req.body.Id;
     
    const user = await User.findOne({_id:Id})
    user.room = roomName;
    user.role = 1;

    const room = new Room({
        admin : Id,
        name : roomName,

        
    });


    try{

        room.name = roomName;
        room.participant.push(Id);
        const savedUser =  await room.save();
        res.send({value:true})

        //res.send({value:true,Id:user._id});
    }
    catch(err){
        res.send(err);
    }
    //const user = await User.findOne({_id:Id})
    //user.room=roomId;
    //console.log(user.room);
    //joinRoom("yahya", "11");
  /*  var inputValue = req.body.redirect;
    if (inputValue == "Join Visioconf"){
        res.sendFile('Visio.html', { root: path.join(__dirname, '../public') });}
    else if (inputValue == "Join Streaming"){
        res.sendFile('streaming.html', { root: path.join(__dirname, '../public') });}
    else if (inputValue == "CreateRoom"){
        res.sendFile('admin.html', { root: path.join(__dirname, '../public') });}
    else {
        res.sendFile('Home.html', { root: path.join(__dirname, '../public') });
*/

  });


router.get('/LogIn',  (req,res)=>{
    try{    
        res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    }
    catch(err){
        res.status(400).send(err);
    }
});



router.get('/Register',  (req,res)=>{
    try{    
        res.sendFile('Register.html', { root: path.join(__dirname, '../public') });
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get('/streaming',  (req,res)=>{
    try{    
        res.sendFile('streaming.html', { root: path.join(__dirname, '../public') });
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get('/home',  (req,res)=>{
    try{    
        res.sendFile('Home.html', { root: path.join(__dirname, '../public') });
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get('/index',  (req,res)=>{
    try{    
        res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    }
    catch(err){
        res.status(400).send(err);
    }
});
router.get('/visio',  (req,res)=>{
    try{    
        res.sendFile('Visio.html', { root: path.join(__dirname, '../public') });
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get('/admin',  (req,res)=>{
    try{    
        res.sendFile('admin.html', { root: path.join(__dirname, '../public') });
    }
    catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;