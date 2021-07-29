window.onload = ()=>{
    
document.getElementById("chatbot_toggle").onclick = function () {
    if (document.getElementById("chatbot").classList.contains("collapsed")) {
        document.getElementById("chatbot").classList.remove("collapsed");
    }
    else {
        document.getElementById("chatbot").classList.add("collapsed");
    }
}


function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}


function firstBotMessage() {
    let firstMessage = "Hi, How can I help you?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    // document.getElementById("userInput").scrollIntoView(false);
}


firstBotMessage();


let getResponse = ()=>{
    let userText = $("#message").val();
    console.log(userText);
    let userHtml = `<p class = 'userText'><span>${userText}</span></p>`
    console.log(userHtml);
    $("#message").val("");
    $("#message-box").append(userHtml);
    document.getElementById("message-box").scrollTop = document.getElementById(
        "message-box"
    ).scrollHeight;
}

$("#message").keypress(async(e)=>{
    if(e.key == "Enter"){
        console.log('pressed enter');
        getResponse();
    }
})

}


