// $(document).ready(function() {
//     $("#toggle").click(function() {
//         $("#collapse").toggleClass("open"); 
//     })
// })

var count = 3;
var index = 1;

$(function () {
  setInterval(function () {
    if (index == count) {
      $(".slideWrapper").animate({ "margin-left": "0px" });
      index = 1;
    }
    else {
        $(".slideWrapper").animate({ "margin-left": "-=1001px" });
        index++;
    }
  }, 3000);
});

// 

function register(){
	var Name = document.getElementById('Name').value;
	var Email = document.getElementById('Email').value;

	var Genders = "";
	if(document.getElementById('optionMale').checked==true)
		Genders = 'male';
	else if(document.getElementById('optionFemale').checked==true)
		Genders ='female';
	
	var Address = document.getElementById('Address').value;
	var bool = true;

	if (Name == "") {
		document.getElementById('err-Name').innerHTML="UserName must filled";
		bool = false;
	}else{
		document.getElementById('err-Name').innerHTML="";
	}


	if(Email == ""){
		document.getElementById('err-Email').innerHTML="Email must be filled";
		bool = false;
	}
	else if(cekEmail(Email)== false){
		document.getElementById('err-Email').innerHTML="Invalid Email Format";
		bool = false;
	}else{
		document.getElementById('err-Email').innerHTML="";
	}


	if(Genders == ""){
   		document.getElementById('err-Gender').innerHTML="Gender must be chosen";
   		bool = false;
   	}else{
   		document.getElementById('err-Gender').innerHTML="";
   	}

}

// 

const mainMenu = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}