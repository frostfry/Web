//Light Mode - Dark Mode body and text toggle//
function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var element = document.getElementById("myButton");
    element.classList.toggle("button-dark-mode")
    var btn = document.getElementById("myButton");
    if (btn.innerText=="Dark Mode") btn.innerText = "Light Mode";
    else (btn.innerText = "Dark Mode");   
}