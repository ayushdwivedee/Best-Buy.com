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
function addToCartFunc(obj){
    let cartDetails=JSON.parse(localStorage.getItem("cartDetails")) || [];
    cartDetails.push(obj);
    localStorage.setItem("cartDetails",JSON.stringify(cartDetails));
    alert("This Product is added, now go to cart to place your order")
}
// console.log(dis(data))
// displaying my product 
let Category=document.getElementById("product-list");
function dis(data){
    data.forEach((obj) =>{
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
        cartButton.innerText="Add to Cart";
        
        cartButton.onclick=function(){
            addToCartFunc(obj)
         } 
        div.append(imgDiv,h2,price,cartButton);
        Category.append(div);
    })

}

// filter code
let filter=document.getElementById("filter-product")
filter.addEventListener("change", function () {
    if (filter.value === "All Product") {
        dis(data);
    } else {
        let filtered = data.filter(function (element) {
            if (element.cat === filter.value) {
                
                return true;
            } else {
                return false;
            }
        })
        dis(filtered);
    }
})


let search=()=>{
    let searchbox=document.getElementById("search-bar").value.toUpperCase();
    let product_list=document.getElementById("product-list");
    let product=document.querySelectorAll(".product");
    let pname=document.getElementsByTagName("h2");

    for(let i=0;i<pname.length;i++){
        let match=product[i].getElementsByTagName("h2")[0];
        if(match){
            let textvalue= match.innerHTML || match.innerText || match.textContent

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.visibility="visible";
            }else{
                product[i].style.visibility="hidden";
            }
        }
    }
} 

 
 

 

//fetching
fetch("./black deal.json")
.then((res)=>res.json())
.then((data)=> dis(data))
.catch((err)=> console.log(err));
