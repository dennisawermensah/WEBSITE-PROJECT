
function process(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone_number").value;
    let msg=document.getElementById("message").value;
    let password=document.getElementById("password").value;

    let error =document.getElementById("error_message");
    let nameError =document.getElementById("error_name");
    let phoneError =document.getElementById("error_phone");
    let emailError =document.getElementById("error_email");
    let msgError =document.getElementById("error_msg");
    let passError=document.getElementById("error_password");

    

    error.style.padding="10px";

    if(name.length < 5){
        nameError.innerHTML="name is too short";
        return false;
    }
    if(isNaN(phone) || phone.length !=10){
        phoneError.innerHTML="Phone Number is invalid";
        return false;
    }
    if(email.indexOf("@") == -1|| email.indexOf(".")==-1 || email.length<5){
        emailError.innerHTML="invalid email";
        return false;
    }
    if(password.length < 5 || password.value=='password'){
        passError.innerHTML="Password is invalid";
        return false;
    }
    if(msg.length < 5){
        msgError.innerHTML="10 minimum message length";
        return false;
    }
    alert("information sent");
    return true;
}




