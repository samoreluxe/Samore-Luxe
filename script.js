/*==================================
SAMORE LUXE
script.js
==================================*/

/*====================
ADD TO CART
====================*/

let cartCount = 0;

const cartCounter = document.getElementById("cart-count");

document.querySelectorAll(".add-cart").forEach(button => {

button.addEventListener("click", () => {

cartCount++;

if(cartCounter){
cartCounter.innerText = cartCount;
}

button.innerHTML =
'<i class="fa-solid fa-check"></i> Added';

button.style.background = "#2ecc71";

setTimeout(() => {

button.innerHTML =
'<i class="fa-solid fa-cart-shopping"></i> Add to Cart';

button.style.background = "";

},1500);

});

});

/*====================
WISHLIST
====================*/

document.querySelectorAll(".wishlist").forEach(button=>{

button.addEventListener("click",()=>{

const icon = button.querySelector("i");

if(icon){

icon.classList.toggle("fa-regular");

icon.classList.toggle("fa-solid");

}

button.classList.toggle("active");

});

});

/*====================
SEARCH
====================*/

const searchInput =
document.querySelector(".search-box input");

const searchBtn =
document.querySelector(".search-box i");

function searchProducts(){

if(!searchInput) return;

const value =
searchInput.value.toLowerCase().trim();

document.querySelectorAll(".product-card").forEach(card=>{

const text =
card.innerText.toLowerCase();

card.style.display =
(text.includes(value) || value==="") ?
"block" : "none";

});

}

if(searchInput){

searchInput.addEventListener("keyup",(e)=>{

if(e.key==="Enter"){

searchProducts();

}

});

}

if(searchBtn){

searchBtn.addEventListener("click",searchProducts);

}

/*====================
ACTIVE NAVBAR
====================*/

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top =
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

const reveals =
document.querySelectorAll(

".product-card,.review-card,.about-container,.packaging-container,.section-heading"

);

function reveal(){

const trigger =
window.innerHeight*0.88;

reveals.forEach(item=>{

const top =
item.getBoundingClientRect().top;

if(top<trigger){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

}

reveals.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);

/*====================
SCROLL TO TOP
====================*/

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
right:25px;
bottom:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#B76E79;
color:#fff;
cursor:pointer;
display:none;
font-size:18px;
z-index:999;
`;

window.addEventListener("scroll",()=>{

topBtn.style.display =
window.scrollY>400 ? "block" : "none";

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

const copyright =
document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
`© ${new Date().getFullYear()} Samore Luxe. All Rights Reserved.`;

}

console.log("Samore Luxe Loaded Successfully");
