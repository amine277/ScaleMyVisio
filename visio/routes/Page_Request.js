const router = require('express').Router();
const path = require('path');

const shell = require('shelljs') ;
const exec = require('child_process').exec;
const { spawn } = require('child_process');


const User = require('../src/User');


//const { joinRoom } = require('../public/index');



function data_roomCreated(user,RoomId){

    


}

router.post('/infoRequest', async function(req,res){
    

    console.log("infoRequest")
    const user = await User.findOne({email:req.body.email})

   // console.log(roomId)


    //joinRoom("yahya", "11");
    res.send(user._id)




  });
  
router.post('/exitRoom',function(req,res){
     
    var Id = req.body.Id;

    res.send({value:true});
  });

router.post('/creatRoom', function(req,res){
    console.log("asa")
    var user_name = req.body.name;
    var roomId = req.body.roomId;
    var Id = req.body.Id;
     
    console.log(roomId);
   res.send({value : true })

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
    }
>>>>>>> f29a19d658f6539e29e8bffa5a611e69bd3a2dcc*/



  });

router.post('/stream',function(req,res){


    console.log("streaaaam");
    try {
        
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