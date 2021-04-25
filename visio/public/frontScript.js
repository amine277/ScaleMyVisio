/*                   Redirection de fichiers front                      */

function logIn_Request(email,pwd){

    axios.post('/LogIn', {
        email: email,
        password: pwd,
      })
      .then((response) => {
          if(response.data.value){
            localStorage.setItem('Id',response.Id)
            window.location.pathname = '/Home'
        }
        
      }, (error) => {
        console.log(error);
      });


    
}


function creatRoom(name,RoomId,Id){


    axios.post('/creatRoom', {
        roomId: RoomId,
        name: name,
        Id: Id
      })
      .then((response) => {
          if(response){
        window.location.pathname = '/Visio'}
        
      }, (error) => {
        console.log(error);
      });

}

function SendRequest(payload,url){

 

// Turn the data object into an array of URL-encoded key/value pairs.

(async () => {
    const rawResponse = await fetch('/infoRequest', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const Id = await rawResponse.json();
  
   // console.log(Id);
    localStorage.setItem('Id',Id)

  })();


}

function Room_update_loc(name,RoomId){
    localStorage.setItem('name',name)
    localStorage.setItem('RoomId',RoomId)
}

function exitRoom(){
    localStorage.removeItem('name')
    localStorage.removeItem('RoomId')
    localStorage.setItem('inRoom',0)

}

function Updateinfo(email){
    localStorage.setItem('email',email)

}


function home_login(){
    home.className = 'hidden';
    login.className = '';
}

function home_register(){
    if (register.className === "hidden"){
        home.className = 'hidden';
        register.className = '';}
    else if (home.className === "hidden"){
        register.className = 'hidden';
        home.className = '';  
    }
}

function adminInterface(){
    passageVisioStreaming.className = 'hidden';
    controlePassage.className = '';
}

function login_streaming(){
    if (streamingSection.className === "hidden"){
        login.className = 'hidden';
        streamingSection.className = ''; 
    }
    else if (login.className === "hidden"){
        login.className = '';
        streamingSection.className = 'hidden';
    }
}


function streaming_visio(){
    if (streamingSection.className === "hidden"){
        control.className = 'hidden';
        streamingSection.className = '';
    }
    else if (control.className === "hidden"){
        streamingSection.className = '';
        control.className = '';
    }
}             // Transition Streaming->Visio BUG

function goVisio(){
    streamingSection.style.display = 'none';
}
    
/*                          Design bouttons                         */
function ParticipantHide(){
    var x = document.getElementById("Participant");
    if (x.style.display === 'none'){
        x.style.display = "block"
    }
    else {
        x.style.display = "none";
    }
}

function ParticipantControlHide(){
    var x = document.getElementById("ParticipantControl");
    var y = document.getElementById("localMedia");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function ChatHide(){
    var x = document.getElementById("chat");
    var y = document.getElementById("buttons");
    var z0 = document.getElementById("videoMedia");
    var z2 = document.getElementById("remoteVideos");
    
    if (x.style.display === 'none'){
        x.style.display = "block";
        y.style.width = "1300px";
        z0.style.width = "80%"
        z2.style.width = "100%"
    }
    else {
        x.style.display = "none";
        y.style.width = "1500px";
        z0.style.width = "100%"
        z2.style.width = "1500px";
    }
}

function homePasswordHide(){
    var x = document.getElementById("homePasswordInput");
    var y = document.getElementById("homeHide1");
    var z = document.getElementById("homeHide2");
    
    if (x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block"; 
    }
}

function registerPasswordHide(){
    var x = document.getElementById("registerPasswordInput");
    var y = document.getElementById("registerHide1");
    var z = document.getElementById("registerHide2");
    
    if (x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block"; 
    }
}

function participantStreamingHide(){
    var x = document.getElementById("ParticipantsStreaming");
    if (x.className === 'hidden'){
        x.className = '';
    }
    else {
        x.className = 'hidden';
    }
}

function chatStreamingHide(){
    var x = document.getElementById("ChatStreaming");
    if (x.className === 'hidden'){
        x.className = '';
    }
    else {
        x.className = 'hidden';
    }
}

/*function exitStreaming() {                              // Faudrait penser à supprimer le flux aussi
    var x = document.getElementById("streamingSection");
    var y = document.getElementById("login");
    x.className
}   */                      

/*                          Fonction servant au chat                */
$('html').keydown((e) =>{
    if (e.which == 13){
        const text = $('#chat_input');
        rc.sendChat(text.val());
        text.val("");
    }
})