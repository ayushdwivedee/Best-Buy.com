 
// password visibility eye button js
let pwShowHide =document.querySelector(".fa-eye-slash");
 
    pwShowHide.addEventListener("click",()=>{
       let pwPlace=document.querySelector(".pass");

       
        if(pwPlace.type==="password"){
            pwPlace.type="text";
        }else{
            pwPlace.type="password"
        }

       })


       // form sumbit code 
 
let email=document.getElementById("email");
let pass=document.getElementById("password");
 
 

let signupForm=document.getElementById("myform");
signupForm.addEventListener("submit",function(e){
    e.preventDefault();
     
    let userdetails={
         
        "email":email.value,
        "password":pass.value,
         
    }
    let savedDetails=JSON.parse(localStorage.getItem("userdetails")) || {};
    if(userdetails.email===savedDetails.email && userdetails.password===savedDetails.password){
        localStorage.setItem("isauth", "Authenticated");
        alert("Sign in success! ");
        window.location.reload()
        window.location.href="./home.html";
    }
    else{
        alert("Wrong Credentials!")
    }
    
})
       
    