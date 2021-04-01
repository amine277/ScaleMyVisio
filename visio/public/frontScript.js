function ParticipantHide(){
    var x = document.getElementById("Participant");
    
    if (x.style.display === 'none'){
        x.style.display = "block"
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
        z1.style.width = "1000px"
        z2.style.width = "1300px"
    }
    else {
        x.style.display = "none";
        y.style.width = "1500px";
        z1.style.width = "1500px";
        z2.style.width = "1500px";
    }
}

$('html').keydown((e) =>{
    if (e.which == 13){
        const text = $('#chat_input');
        rc.sendChat(text.val());
        text.val("");
    }
})