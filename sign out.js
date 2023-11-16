let isauth=localStorage.getItem("isauth") || "Not Authenticated";
let savedDetails=JSON.parse(localStorage.getItem("userdetails"));
if(isauth==="Authenticated"){
    let ac_holderName=document.querySelector(".account-menu a");
    ac_holderName.innerText=savedDetails.fName;

     
     

    let img=document.createElement("img");
    img.src="https://pisces.bbystatic.com/image2/vector/BestBuy_US/dam/MyBestBuy-7dc4daea-9565-4433-850b-aae6aa356c17.svg";
    img.style.width="200px";
    img.style.marginLeft="100px";

    let div=document.querySelector(".account-border");
    div.append(img);

    let para=document.querySelector(".account-para");
    para.style.visibility="hidden";

    let signup=document.querySelector(".create");
    signup.style.visibility="hidden";

    let signout=document.querySelector(".sign");
    signout.innerText="Sign out";
    signout.addEventListener("click",()=>{
        localStorage.setItem("isauth","Not Authenticated");
        window.location.reload()
    })
}