const submit = document.querySelector('button');

function test(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");
    let text;


    if (name.length < 10 || name.length > 50){
       text = "Name is not valid";
       error.innerHTML = text;
       return false;       
   }


   if(email.length < 10 || email.length > 30){
       text = "Invalid email";
       error.innerHTML = text;
       return false;
   }

   if(message.length < 15 || message.length > 140){
    text = "Invalid message";
    error.innerHTML = text;
    return false;
   }

   return true;
}

submit.onclick = function test(){
}