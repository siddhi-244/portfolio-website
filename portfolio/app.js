const navMenu=document.getElementById("nav-menu");
const navToggle=document.getElementById("nav-toggle");
const navClose=document.getElementById("nav-close");

if(navToggle){
	navToggle.addEventListener("click",function(){
		navMenu.classList.add("show-menu");
	});
}
if(navClose){
	navClose.addEventListener("click",function(){
		navMenu.classList.remove("show-menu");
	});
}
const navLink=document.querySelectorAll(".nav__link");
function linkAction(){
	const navMenu=document.getElementById("nav-menu");
	navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click",linkAction));