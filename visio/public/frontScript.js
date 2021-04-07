/*                   Redirection de fichiers front                      */

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
    login.className = 'hidden';
    streamingSection.className = ''; 
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
    var z1 = document.getElementById("localMedia");
    var z2 = document.getElementById("remoteVideos");
    
    if (x.style.display === 'none'){
        x.style.display = "block";
        y.style.width = "1300px";
        z1.style.width = "800px"
        z2.style.width = "1300px"
    }
    else {
        x.style.display = "none";
        y.style.width = "1500px";
        z1.style.width = "1000px";
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

/*                          Fonction servant au chat                */
$('html').keydown((e) =>{
    if (e.which == 13){
        const text = $('#chat_input');
        rc.sendChat(text.val());
        text.val("");
    }
})