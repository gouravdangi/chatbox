document.getElementById("chatbot_toggle").onclick = function () {
    if (document.getElementById("chatbot").classList.contains("collapsed")) {
        document.getElementById("chatbot").classList.remove("collapsed")
        document.getElementById("chatbot_toggle").children[0].style.display = "none"
        document.getElementById("chatbot_toggle").children[1].style.display = ""
        setTimeout(addResponseMsg, 1000, "Hi")
    }
    else {
        document.getElementById("chatbot").classList.add("collapsed");
    }
}

document.querySelector("#message").addEventListener("keypress", async (e) => {
    if (e.key == "Enter") {
        document.querySelector("#message").value = "";
         console.log("hi");
    }
})
