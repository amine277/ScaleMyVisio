const router = require('express').Router();
const path = require('path');
//const { joinRoom } = require('../public/index');

router.post('/exitRoom',function(req,res){

    console.log("ddddd")
     
    //console.log(user_name)
   // console.log(roomId)


    //joinRoom("yahya", "11");
    res.sendFile('Home.html', { root: path.join(__dirname, '../public') });
  });

router.post('/creatRoom',function(req,res){
    console.log("sasass")
    var user_name = req.body.name;
    var roomId = req.body.roomId;
     
    console.log(user_name)
    console.log(roomId)


    //joinRoom("yahya", "11");
    var inputValue = req.body.redirect;
    if (inputValue == "Join Visioconf"){
        res.sendFile('Visio.html', { root: path.join(__dirname, '../public') });}
    else if (inputValue == "Join Streaming"){
        res.sendFile('streaming.html', { root: path.join(__dirname, '../public') });}
    else if (inputValue == "CreateRoom"){
        res.sendFile('admin.html', { root: path.join(__dirname, '../public') });}
    else {
        res.sendFile('Home.html', { root: path.join(__dirname, '../public') });
    }




  });

router.get('/creatRoom',  (req,res)=>{
    try{    
        res.sendFile('Register.html', { root: path.join(__dirname, '../public') });
    }
    catch(err){
        res.status(400).send(err);
    }
});


router.get('/exitRoom',  (req,res)=>{
    try{    
        res.sendFile('Home.html', { root: path.join(__dirname, '../public') });
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get('/signUp',  (req,res)=>{
    try{    
        res.sendFile('Home.html', { root: path.join(__dirname, '../public') });
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