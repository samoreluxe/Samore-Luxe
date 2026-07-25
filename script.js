/*==================================
SAMORE LUXE
script.js
==================================*/

/*====================
ADD TO CART
====================*/

let cartCount = 0;

const cartCounter =
document.getElementById("cart-count");

document.querySelectorAll(".add-cart").forEach(button=>{

button.addEventListener("click",()=>{

cartCount++;

if(cartCounter){

cartCounter.innerText=cartCount;

}

button.innerHTML=
'<i class="fa-solid fa-check"></i> Added';

button.style.background="#2ecc71";

setTimeout(()=>{

button.innerHTML=
'<i class="fa-solid fa-cart-shopping"></i> Add to Cart';

button.style.background="";

},1500);

});

});

/*====================
SEARCH
====================*/

const searchInput=
document.querySelector(".search-box input");

const searchBtn=
document.querySelector(".search-box i");

function searchProducts(){

if(!searchInput)return;

const value=
searchInput.value.toLowerCase().trim();

document.querySelectorAll(".product-card").forEach(card=>{

const text=
card.innerText.toLowerCase();

card.style.display=

(text.includes(value)||value==="")

?

"block"

:

"none";

});

}

if(searchBtn){

searchBtn.addEventListener("click",searchProducts);

}

if(searchInput){

searchInput.addEventListener("keyup",(e)=>{

if(e.key==="Enter"){

searchProducts();

}

});

}

/*====================
ACTIVE NAV
====================*/

const sections=
document.querySelectorAll("section");

const navLinks=
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=
section.offsetTop-150;

if(window.scrollY>=top){

current=
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*====================
HEADER SHADOW
====================*/

const header =
document.querySelector("header");

window.addEventListener("scroll",()=>{

if(!header) return;

if(window.scrollY>40){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*====================
SCROLL REVEAL
====================*/

const revealItems=
document.querySelectorAll(

".product-card,.review-card,.about-container,.packaging-container,.section-heading"

);

function reveal(){

const trigger=
window.innerHeight*0.88;

revealItems.forEach(item=>{

const top=
item.getBoundingClientRect().top;

if(top<trigger){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

}

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);

/*====================
QUICK VIEW
====================*/

const modal=
document.getElementById("quickView");

const modalImg=
document.getElementById("quickImg");

const modalTitle=
document.getElementById("quickTitle");

const modalPrice=
document.getElementById("quickPrice");

document.querySelectorAll(".product-card img").forEach(img=>{

img.style.cursor="pointer";

img.addEventListener("click",()=>{

if(!modal) return;

const card=img.closest(".product-card");

modalImg.src=img.src;

modalTitle.innerText=
card.querySelector("h3").innerText;

modalPrice.innerText=
card.querySelector(".price").innerText;

modal.style.display="flex";

});

});

const closeBtn=
document.querySelector(".close-quick");

if(closeBtn){

closeBtn.onclick=()=>{

modal.style.display="none";

};

}

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

};
/*====================
SCROLL TO TOP
====================*/

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML=
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=

window.scrollY>400

?

"block"

:

"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*====================
CURRENT YEAR
====================*/

const copyright=
document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=

`© ${new Date().getFullYear()} Samore Luxe. All Rights Reserved.`;

}

/*====================
PAGE LOADED
====================*/

window.addEventListener("load",()=>{

console.log("Samore Luxe Website Loaded Successfully ❤️");

});
