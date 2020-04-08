function copyEmail(){
  var myEmail = document.createElement("textarea");
  document.body.appendChild(myEmail);

  //myEmail.style.display = "none";
  myEmail.value = "matthewrbaron@gmail.com";

  myEmail.select();
  myEmail.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(myEmail);
  alert("Copied my email to the clipboard");
}
