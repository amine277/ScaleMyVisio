const router = require('express').Router();
const path = require('path');

const shell = require('shelljs') ;
const exec = require('child_process').exec;
const { spawn } = require('child_process');


const User = require('../src/User');
const Room = require('../src/Rooms');


//const { joinRoom } = require('../public/index');



function data_roomCreated(user,RoomId){


}


router.post('/ChooseStream', async function(req,res){
    
    const rooms =await Room.find({"streamed": 1},'name');
    
   //const rooms=cursor.toArray()
    var liste=[];
    rooms.forEach(element => {

        liste.push(element.name);
        
    });
    console.log(liste);
    res.send(liste)
   
  });

router.post('/infoRequest', async function(req,res){
    

    console.log("infoRequest")
    const user = await User.findOne({email:req.body.email})
  
    res.send(user._id)

  });
  
router.post('/exitRoom',function(req,res){
     
    var Id = req.body.Id;

    res.send({value:true});
  });


  router.post('/exit',function(req,res){

    //console.log("User exited")
    if (typeof window !== 'undefined') {
        // do your stuff with sessionStorage
        sessionStorage.setItem('user', "qalwa");
        console.log(sessionStorage.getItem('user'))
        user.Id = 0;
    }
    
    //console.log(user_name)
   // console.log(roomId)
    

    //joinRoom("yahya", "11");
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });




});


router.post('/creatRoom', async function(req,res){
    var user_name = req.body.name;
    var roomName = req.body.roomId;
    var Id = req.body.Id;


    console.log(Id);     
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
   
   

       

  });

router.post('/stream',async function(req,res){


    //console.log("streaaaam");
    try {
        const room = await Room.findOne({name:req.body.Room})
        room.streamed = 1;
        await room.save();


        const child =exec("./stream.sh");

        child.stdout.pipe(process.stdout);
        child.stderr.pipe(process.stderr);


        

  
        res.status(204).send();
     }
    catch(err){
        res.status(400).send(err);
    }
    
  });


router.get('/LogIn',  (req,res)=>{
    try{    
        res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get('/ChooseStream',  (req,res)=>{
    try{    
        res.sendFile('ChooseStream.html', { root: path.join(__dirname, '../public') });
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