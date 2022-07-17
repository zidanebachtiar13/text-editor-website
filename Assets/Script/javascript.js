let npp = document.querySelector("#nav_notepadplusplus");
let sublime = document.querySelector("#nav_sublimetext");
let vsC = document.querySelector("#nav_vsCode");
let vim = document.querySelector("#nav_vim");
let	emacs = document.querySelector("#nav_emacs");

npp.addEventListener('click', function(event) {
	alert("Anda akan dialihkan ke halaman Notepad++");
});	

sublime.addEventListener('click', function(event) {
	alert("Anda akan dialihkan ke halaman Sublime Text");
});	

vsC.addEventListener('click', function(event) {
	alert("Anda akan dialihkan ke halaman Visual Studio Code");
});	

vim.addEventListener('click', function(event) {
	alert("Anda akan dialihkan ke halaman Vim");
});	

emacs.addEventListener('click', function(event) {
	alert("Anda akan dialihkan ke halaman Emacs");
});	