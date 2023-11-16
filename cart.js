let isau=localStorage.getItem("isauth") || "Not Authenticated";

if(isau !== "Authenticated"){
   window.location.href="./sign in.html";
}
else{
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
//function for add to cart
function removeFromCartFunc(obj){
    
    localStorage.removeItem("cartDetails")
   let element=document.querySelector("#cart-item>div");
    element.remove();
    alert("This Product removed")
}

let mainData=JSON.parse(localStorage.getItem("cartDetails"));
console.log(mainData)
// displaying my product 
let cartPro=document.getElementById("cart-item");
dis(mainData)
function dis(mainData){
    let empty=document.querySelector(".footer-head");
    empty.innerText="your cart items";
    mainData.forEach((obj) =>{
        let div= document.createElement("div");
        let imgDiv=document.createElement("div");
        let imgTag=document.createElement("img");
        imgTag.src=obj.image;
        imgDiv.append(imgTag);
        imgDiv.classList.add("product-img");
        imgTag.style.width="100%";
        imgTag.style.height="100%";
        let h2=document.createElement("h2");
        h2.innerText=obj.text;
        let price=document.createElement("h3");
        price.innerText=obj.price;
        let cartButton=document.createElement("button");
        cartButton.innerText="Remove from Cart";
        
        cartButton.onclick=function(){
            removeFromCartFunc(obj)
         } 
        div.append(imgDiv,h2,price,cartButton);
        cartPro.append(div);
    })

}