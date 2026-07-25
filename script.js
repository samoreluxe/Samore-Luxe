/*==================================
SAMORE LUXE
LUXURY SCRIPT.JS v2.0 (PART 1)
Replace your complete script.js
==================================*/

/*=========================
ADD TO CART
=========================*/

let cartCount = 0;

const cartCounter = document.getElementById("cart-count");

document.querySelectorAll(".add-cart").forEach(button=>{

button.addEventListener("click",()=>{

cartCount++;

if(cartCounter){

cartCounter.innerHTML=cartCount;

}

button.innerHTML='<i class="fa-solid fa-check"></i> Added';

button.style.background="#2ecc71";

button.disabled=true;

setTimeout(()=>{

button.innerHTML='<i class="fa-solid fa-cart-shopping"></i> Add to Cart';

button.style.background="";

button.disabled=false;

},1800);

});

});

/*=========================
WISHLIST
=========================*/

document.querySelectorAll(".wishlist-btn").forEach(button=>{

button.addEventListener("click",()=>{

const icon=button.querySelector("i");

icon.classList.toggle("fa-regular");

icon.classList.toggle("fa-solid");

button.classList.toggle("active");

});

});

/*=========================
SEARCH
=========================*/

const searchInput=document.querySelector(".search-box input");

const searchBtn=document.querySelector(".search-box button");

function searchProducts(){

const value=searchInput.value.toLowerCase().trim();

document.querySelectorAll(".product-card").forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)||value===""?"block":"none";

});

}

if(searchBtn){

searchBtn.onclick=searchProducts;

}

if(searchInput){

searchInput.addEventListener("keyup",e=>{

if(e.key==="Enter"){

searchProducts();

}

});

}

/*=========================
HEADER EFFECT
=========================*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});
/*==================================
SAMORE LUXE
LUXURY SCRIPT.JS v2.0 (PART 2)
Paste below PART 1
==================================*/

/*=========================
ACTIVE NAVIGATION
=========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-170;

const height=section.offsetHeight;

if(pageYOffset>=top && pageYOffset<top+height){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=========================
SCROLL REVEAL
=========================*/

const revealItems=document.querySelectorAll(

".product-card,.category-card,.pack-card,.review-card,.contact-card,.about-wrapper,.packaging-wrapper,.section-heading"

);

function reveal(){

const trigger=window.innerHeight*0.85;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

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

/*=========================
IMAGE HOVER EFFECT
=========================*/

document.querySelectorAll(".product-card img").forEach(img=>{

img.addEventListener("mousemove",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/*=========================
SMOOTH BUTTON RIPPLE
=========================*/

document.querySelectorAll(".btn,.secondary-btn,.add-cart").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".35s";

});

});
/*==================================
SAMORE LUXE
LUXURY SCRIPT.JS v2.0 (PART 3)
Paste below PART 2
==================================*/

/*=========================
SCROLL TO TOP BUTTON
=========================*/

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

topBtn.style.cssText=`

position:fixed;
right:25px;
bottom:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#B76E79;
color:#fff;
font-size:20px;
cursor:pointer;
display:none;
z-index:99999;
box-shadow:0 10px 25px rgba(0,0,0,.35);
transition:.35s;

`;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================
PRODUCT QUICK VIEW
=========================*/

document.querySelectorAll(".product-card img").forEach(card=>{

card.style.cursor="pointer";

card.addEventListener("click",()=>{

const product=card.closest(".product-card");

const title=product.querySelector("h3").innerText;

const price=product.querySelector("p").innerText;

alert(

title+

"\n\n"+

price+

"\n\nPremium Handmade Jewellery\n\nSamore Luxe"

);

});

});

/*=========================
CURRENT YEAR
=========================*/

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

/*=========================
PAGE LOADER
=========================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

/*=========================
CONSOLE
=========================*/

console.log("✨ Samore Luxe Luxury Website Loaded Successfully ✨");
