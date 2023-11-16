// I Button Pop up modal

document.querySelector(".info").addEventListener("click",function(){
    document.querySelector(".popup1").style.visibility="visible";
})
document.querySelector(".cross1").addEventListener("click",function(){
    document.querySelector(".popup1").style.visibility="hidden";
})

document.querySelector(".info1").addEventListener("click",function(){
    document.querySelector(".popup2").style.visibility="visible";
})
document.querySelector(".cross2").addEventListener("click",function(){
    document.querySelector(".popup2").style.visibility="hidden";
})


// password visibility eye button js
let pwShowHide =document.querySelector(".fa-eye-slash");
 
    pwShowHide.addEventListener("click",()=>{
       let pwPlace=document.querySelectorAll(".pass");

       pwPlace.forEach((password) => {
        if(password.type==="password"){
            password.type="text";
        }else{
            password.type="password"
        }

       })
       
    })

// form sumbit code 
let fName=document.getElementById("name1");
let lName=document.getElementById("name2");
let email=document.getElementById("email");
let pass=document.getElementById("password1");
let cPass=document.getElementById("password2");
let mobile=document.getElementById("mbl");

let signupForm=document.getElementById("myform");
signupForm.addEventListener("submit",function(e){
    e.preventDefault();
     
    let userdetails={
        "fName":fName.value,
        "lName":lName.value,
        "email":email.value,
        "password":pass.value,
        "cPassword":cPass.value,
        "mobile":mobile.value,
    }
    console.log(userdetails)
    if(pass.value===cPass.value){
        localStorage.setItem("userdetails",JSON.stringify(userdetails));
        alert("Sign up successfully , Now you can sign in to your account");
        window.location.href="./sign in.html";
    }
    else{
        alert("Please check your confirm password ")
    }
    
})
 