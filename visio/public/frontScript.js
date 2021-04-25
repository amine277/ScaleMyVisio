/*                   Redirection de fichiers front                      */

function adminInterface(){
    passageVisioStreaming.className = 'hidden';
    controlePassage.className = '';
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
    var y = document.getElementById("StreamingButtons");
    if (x.className === 'hidden'){
        x.className = '';
        y.style.width = "80%";
    }
    else {
        x.className = 'hidden';
        y.style.width = "100%"
    }
}

/*                          Fonction servant au chat                
$('html').keydown((e) =>{
    if (e.which == 13){
        const text = $('#chat_input');
        rc.sendChat(text.val());
        text.val("");
    }
})*/