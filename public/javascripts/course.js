const changeContent = function(event){
	const frame = document.querySelectorAll(".frame");
	const target = '.frame#'+ this.innerHTML;
	console.log(target);
	document.querySelector(".frame.selected").classList.remove("selected");
	frame.forEach(()=>{

<<<<<<< HEAD
	});
	document.querySelector(target).classList.add("selected");
=======

const Timeline = document.querySelector("#Timeline");


const Course =  {
	pbl : true,

	date  : [ "09/05","09/06","09/12","09/13","09/19","09/20","09/26","09/27","10/02","10/03","10/09","10/10","10/16","10/17","10/23","10/24","10/30","10/31","11/07","11/08","11/14","11/15","11/21","11/22","11/28","11/29","12/05","12/06","12/12","12/13","12/19","12/20"
	],

	week : [ 1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],

	subject : [ "Introduction & The Internet and World Wide Web", "Basic HTML", "CSS for Styling", "Page Layout", "Basic PHP", "Forms", "Relational Database & SQL", "JavaScript", "DOM", "Prototype & Event", "Ajax & XML & JSON", "Scriptaculous"
	],

	lecture_slide :[
	"https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/00-introduction.html","https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/01-www.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/02-html.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/03-css.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/04-layout.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/05-PHP.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/06-forms.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/07-sql.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/08-javascript.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/09-dom.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/10-prototype.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/11-events.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/12-ajaxXmlJson.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/13-webServices.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/14-scriptaculous.html" ],

	lab : {
		week : [3,4,5,6,7,9,10,11,12],
		subject : ["Introduction","About Me(HTML)", "CSS", "CSS Design & Layout", "Movie Review(HTML, CSS, Layout)", "Basic PHP", "Forms", "SQL", "JavaScript"],
		lab_slide : ["https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab0-introduction.html","https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab1-aboutme(HTML).html", "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab3-favorite.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab4-movieReview.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab5-musicLibrary.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab6-gradeStore.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab7-SQL.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab8-pimpMyText.html"]
	}
>>>>>>> parent of 0d5db85... error!
};

const make_PBLObjective = function(){
	const pbl_objective = document.querySelector("#pbl_objective");
	const pbl_project = document.createElement("h2");
	const pbl_description = document.createElement("ul");

	const pbl_project_text = document.createTextNode(Course.pbl.pbl_project);
	for(i=0; i<Course.pbl.pbl_project_description.length ; i++){
			const pbl_description_list = document.createElement("li");
			const  pbl_description_list_text = document.createTextNode(Course.pbl.pbl_project_description[i]);

			pbl_description_list.appendChild(pbl_description_list_text);
			pbl_description.appendChild(pbl_description_list);
	}
	pbl_project.appendChild(pbl_project_text);
	pbl_objective.appendChild(pbl_project);
	pbl_objective.appendChild(pbl_description);
}

const make_PBLGroup = function(){
	const pbl_group_container = document.querySelector("#pbl_GGroup");
	
	const section1_button = document.createElement("button");
	section1_button.appendChild(document.createTextNode("click"));
	section1_button.id="sec1btn";

	const section1_container  = document.createElement("div");
	section1_container.id="sec1";
	for(i=0; i<Course.pbl.pbl_group.section1.length;i++){
		const group_container = document.createElement("div");
		const group_name = document.createElement("h4");
		const group_list = document.createElement("ul");
		const group_leader = document.createElement("li");
		const group_page = document.createElement("a");

		const group_name_text = document.createTextNode(Course.pbl.pbl_group.section1[i].team_name);
		const group_leader_text = document.createTextNode(Course.pbl.pbl_group.section1[i].leader);
		const group_page_text = document.createTextNode("홈페이지");
			
		group_page.href=Course.pbl.pbl_group.section1[i].team_page;

		group_container.classList.add("pbl_group_container");
		group_list.classList.add("pbl_group_list")
		
			group_name.appendChild(group_name_text);
			group_leader.appendChild(group_leader_text);
			group_list.appendChild(group_leader); 
			group_page.appendChild(group_page_text);
			for(j=0;j<Course.pbl.pbl_group.section1[i].team_member.length;j++){
				let group_teamone = document.createElement("li");
				let group_teamone_text = document.createTextNode(Course.pbl.pbl_group.section1[i].team_member[j]);
				
				group_teamone.appendChild(group_teamone_text);
				group_list.appendChild(group_teamone);
			}
			group_container.appendChild(group_name);
			group_container.appendChild(group_list);
			group_container.appendChild(group_page);

			section1_container.appendChild(group_container);
	}
	pbl_group_container.appendChild(section1_button);
	pbl_group_container.appendChild(section1_container);
}

const fold_pbl_group = function(){
	const pbl_group = document.querySelector("#sec1");
	pbl_group.classList.toggle("fold");
}

<<<<<<< HEAD

make_Timeline();
focusOn();
make_PBLObjective();
make_PBLGroup();
=======
const changeContent = function(event){
	const target = this.innerHTML;
	console.log(this);
	document.querySelector(".frame.selected").classList.remove("selected");
	document.querySelector(".frame#"+target).classList.add("selected");
}



make_Timeline();
focusOn();
>>>>>>> parent of 0d5db85... error!

document.querySelectorAll(".dropdown-list").forEach((element)=>{
	element.addEventListener('click',changeContent.bind(element));
})

<<<<<<< HEAD
document.querySelector("#sec1btn").addEventListener('click', fold_pbl_group);
=======
document.querySelectorAll(".dropdown-list").forEach((element)=>{
	element.addEventListener('click',changeContent.bind(element));
})
>>>>>>> parent of 0d5db85... error!
