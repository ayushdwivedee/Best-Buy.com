let Category=document.getElementById("category");
function dispro(data){
    data.forEach((obj) =>{
        let div= document.createElement("div");
        let imgDiv=document.createElement("div");
        let imgTag=document.createElement("img");
        imgTag.src=obj.image;
        imgDiv.append(imgTag);
        let aTag=document.createElement("a");
        aTag.innerText=obj.text;
        let aDiv=document.createElement("p");
        aDiv.append(aTag);
        div.append(imgDiv,aDiv);
        Category.append(div);
    })
}


//for gallery slider
let cont=document.querySelector(".gallery");
let cont1=document.querySelector(".gallery1");
let nextbtn=document.getElementById("next-btn");
let backbtn=document.getElementById("back-btn");
let nextbtn1=document.getElementById("nextbtn");
let backbtn1=document.getElementById("backbtn"); 

nextbtn.addEventListener("click",() => {
    cont.style.scrollBehavior="smooth";
    cont.scrollLeft+=380;
})
backbtn.addEventListener("click",() => {
    cont.style.scrollBehavior="smooth";
    cont.scrollLeft-=380;
})

nextbtn1.addEventListener("click",() => {
    cont1.style.scrollBehavior="smooth";
    cont1.scrollLeft+=380;
})
backbtn1.addEventListener("click",() => {
    cont1.style.scrollBehavior="smooth";
    cont1.scrollLeft-=380;
})

//Add to cart function
let AtoC=document.querySelectorAll(".AtoC");
AtoC.forEach((el)=>{
    el.addEventListener("click",()=>{
        let proData=document.querySelector(".part");
        let cartData=document.getElementById("cart-item");
        console.log("ayush")
        cartData.push(proData)
        
    })
})

//search feature
let search=()=>{
    let searchbox=document.getElementById("search-bar").value.toUpperCase();
    let product_category=document.getElementById("gallery");
    let product=document.querySelectorAll(".gallery-div");
    let pname=product_category.querySelectorAll("a");

    for(let i=0;i<pname.length;i++){
        let match=product[i].querySelectorAll("a")[0];
        if(match){
            let textvalue= match.innerHTML || match.innerText || match.textContent

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display="";
            }else{
                product[i].style.display="none";
            }
        }
    }
}  
 
fetch("./home.json")
.then((res)=>res.json())
.then((data)=> dispro(data))
.catch((err)=> console.log(err));
