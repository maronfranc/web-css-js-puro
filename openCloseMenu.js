// jsClose()
document.getElementById("mainContent").addEventListener('click', jsClose);
document.getElementById("mainNav").addEventListener('click', jsClose);
document.getElementById("mainSide").addEventListener('click', jsClose);
document.getElementById("mainModif").addEventListener('click', jsClose);
document.getElementById("mainPatroci").addEventListener('click', jsClose);
document.getElementById("mainFooter").addEventListener('click', jsClose);
function jsOpen() {
  document.getElementById('mySidebar').style.display = "block";
  document.getElementById('mySidebar').style.width = "50%";
}
function jsClose() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}
