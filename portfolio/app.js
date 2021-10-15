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

const skillsContent=document.getElementsByClassName("skills__content");
const skillsHeader=document.querySelectorAll(".skills__header");


function toggleSkills(){
	console.log(skillsContent);
	let itemClass=this.parentNode.className;
	for(i=0;i<skillsContent.length;i++){
		skillsContent[i].className="skills__content skills__close";
	}
	if(itemClass=="skills__content skills__close"){
		this.parentNode.className="skills__content skills__open";
	
}
}
skillsHeader.forEach((el)=>{
	el.addEventListener("click",toggleSkills)
	});


const tabs=document.querySelectorAll("[data-target]");
const tabContents=document.querySelectorAll("[data-content]");
tabs.forEach(tab=>{
	tab.addEventListener("click",()=>{
		const target=document.querySelector(tab.dataset.target)
		tabContents.forEach(tabContent => {
			tabContent.classList.remove("qualification__active")
		})
		target.classList.add("qualification__active")
		tabs.forEach(tab=>{
			tab.classList.remove("qualification__active")
		})
		tab.classList.add("qualification__active");
	})
})