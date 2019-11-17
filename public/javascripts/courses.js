
const navbar = document.querySelector("#navbar");
const header = document.querySelector("#header");
const dropdown_btn = document.querySelector(".dropdown-btn");
const dropdown_btn2 = document.querySelectorAll(".dropdown-btn")[1];
const dropdown_list = document.querySelectorAll(".dropdown-list")
const dropdown_content = document.querySelector(".dropdown-content");
const trig_under = document.querySelector("#trig_under");
const trig_post = document.querySelector("#trig_post");

const  handleScroll = function(event){

		let scrollTop = document.scrollingElement.scrollTop;
		const screen_height = window.screen.height;
		if (scrollTop >= 0.3*screen_height){
			this.classList.remove("fixed")
			this.classList.add("sticky");
		}
		else{	
			this.classList.remove("sticky");
			this.classList.add("fixed");
		}
};
const  handleScroll_nav = function(event){

		let scrollTop = document.scrollingElement.scrollTop;
		const screen_height = window.screen.height;
		if (scrollTop >= 0.3*screen_height){
			this.classList.remove("hidden")
			this.classList.add("hidden");
		}
		else{
			this.classList.remove("hidden");
			setTimeout(()=>{
				this.classList.add("hidden");
			},3000);
		}
};
	
const handleMouseMove = function(event){
	const screen_height = window.screen.height;
	if( event.pageY < 0.05*screen_height){
		this.classList.remove("hidden");
	}
	else {
		setTimeout(()=>{
			this.classList.add("hidden");
		})
	}
};

const toggle_dropdowncontent = function(event){
	this.classList.toggle("a11y-hidden");
}
;
const triger_postgraduate = function(e){
		console.log("selected")
		document.querySelector(".content.selected").classList.remove("selected");
		// document.querySelector(".sectionContent").style["background-color"]="#727";
		setTimeout(()=>{
			document.querySelector("#Postgraduate").classList.add("selected")},500);
};
const triger_undergraduate = function(e){
		document.querySelector(".content.selected").classList.remove("selected");
		// document.querySelector(".sectionContent").style["background-color"]="#727";
		setTimeout(()=>{
			document.querySelector("#Undergraduate").classList.add("selected")},500);
};


const change_btn_content = function(event){
	const btn = document.querySelectorAll(".dropdown-btn")
	btn[1].innerHTML = this.innerHTML;
	btn[0].innerHTML = this.innerHTML;
}

const handle_mouseOut = function(event){
	if(!(this.classList.contains("a11y-hidden"))){
		setTimeout(()=>{
			this.classList.add("a11y-hidden");
		},1000);
	}
}


window.addEventListener('scroll',handleScroll.bind(header));
window.addEventListener('scroll',handleScroll_nav.bind(navbar));
window.addEventListener('mousemove',handleMouseMove.bind(navbar));

dropdown_btn.addEventListener('click',toggle_dropdowncontent.bind(dropdown_content));
dropdown_btn2.addEventListener('click',toggle_dropdowncontent.bind(dropdown_content));

dropdown_list.forEach((element) =>{
	element.addEventListener('click',change_btn_content.bind(element));
});	

dropdown_content.addEventListener('mouseleave',handle_mouseOut.bind(dropdown_content));

trig_under.addEventListener('click',triger_undergraduate);
trig_post.addEventListener('click',triger_postgraduate);

setTimeout(()=>{
	navbar.classList.add("hidden");
},1000);




console.log("hello");	