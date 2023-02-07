let username = localStorage.getItem("loggedInUser");
document.getElementById("greeting").innerHTML = username;
let logOutBtn= document.getElementById("logout-button")
document.getElementById("logout-button").addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
  logOutBtn.setAttribute("hidden", "hidden");
  window.location.href = "main.html";
});
if(localStorage.getItem("loggedInUser") == null){
    logOutBtn.setAttribute("hidden", "hidden");

}
if(localStorage.getItem("loggedInUser") !== null){
 document.getElementById("greeting").innerHTML = username;
}
