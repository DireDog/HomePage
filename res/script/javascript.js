$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

//=============================================================================
function copyEmail() {
  var myEmail = document.createElement("textarea");
  document.body.appendChild(myEmail);
  //myEmail.style.display = "none";
  myEmail.value = "ReinaLalibertebaron@gmail.com"; //change deadname email address
  myEmail.select();
  myEmail.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(myEmail);
}

//============================================================================
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
console.log("flag 1");

if (currentTheme) {
  console.log("flag A1");
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
  console.log("flag B1");
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
//=============================================================================
function addNavBar() {
  let elem = document.createElement('ul');
  elem.setAttribute('class','navbar-nav')
  elem.setAttribute('id','nav-ul-0');
  let toAppend = document.getElementById("collapsibleNavbar");
  toAppend.appendChild(elem);
  //***
  elem = document.createElement('li');
  elem.setAttribute('class','nav-item');
  elem.setAttribute('id','nav-li-index');
  toAppend = document.getElementById("nav-ul-0");
  toAppend.appendChild(elem);

  elem = document.createElement('a');
  elem.setAttribute('class','nav-link');
  elem.setAttribute('id','nav-link-0');
  elem.setAttribute('href','index.html');
  elem.textContent = "Home";
  toAppend = document.getElementById("nav-li-index");
  toAppend.appendChild(elem);
  //document.getElementById("nav-li-index").href = "index.html";


  //***
  elem = document.createElement('li');
  elem.setAttribute('class','nav-item');
  elem.setAttribute('id','nav-li-projects');
  toAppend = document.getElementById("nav-ul-0");
  toAppend.appendChild(elem);

  elem = document.createElement('a');
  elem.setAttribute('class','nav-link');
  elem.setAttribute('id','nav-link-1');
  elem.setAttribute('href','projects.html');
  elem.textContent = "Projects";
  toAppend = document.getElementById("nav-li-projects");
  toAppend.appendChild(elem);
  document.getElementById("nav-li-projects").href = "projects.html";



  //***
  elem = document.createElement('li');
  elem.setAttribute('class','nav-item');
  elem.setAttribute('id','nav-li-about');
  element = document.getElementById("nav-ul-0");
  element.appendChild(elem);

  elem = document.createElement('a');
  elem.setAttribute('class','nav-link');
  elem.setAttribute('id','nav-link-2');
  elem.setAttribute('href','about.html');
  elem.textContent = "About Me";
  element = document.getElementById("nav-li-about");
  element.appendChild(elem);
  document.getElementById("nav-li-about").href = "about.html";



  //***
  elem = document.createElement('li');
  elem.setAttribute('class','nav-item');
  elem.setAttribute('id','nav-li-resume');
  element = document.getElementById("nav-ul-0");
  element.appendChild(elem);

  elem = document.createElement('a');
  elem.setAttribute('class','nav-link');
  elem.setAttribute('id','nav-link-3');
  elem.setAttribute('href','resume.html');
  elem.textContent = "Resume";
  element = document.getElementById("nav-li-resume");
  element.appendChild(elem);
  document.getElementById("nav-li-resume").href = "resume.html";

  //***
  elem = document.createElement('li');
  elem.setAttribute('class','nav-item');
  elem.setAttribute('id','nav-li-contact');
  element = document.getElementById("nav-ul-0");
  element.appendChild(elem);

  elem = document.createElement('a');
  elem.setAttribute('class','nav-link');
  elem.setAttribute('id','nav-link-4');
  elem.setAttribute('href','contact.html');
  elem.textContent = "Contact Me";
  element = document.getElementById("nav-li-contact");
  element.appendChild(elem);
  document.getElementById("nav-li-contact").href = "contact.html";
}
