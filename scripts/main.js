document.addEventListener("DOMContentLoaded",()=> {

    const email = document.getElementById("email");
    const registerButton = document.getElementById("register_button");
    const outputMessage = document.getElementById("output_message")

    registerButton.addEventListener("click", ()=>{
        outputMessage.innerHTML=`Welcome ${email.value}`
    }
})