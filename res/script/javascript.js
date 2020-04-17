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
