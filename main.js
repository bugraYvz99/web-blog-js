let myblog = document.getElementById("myblog");
let logInBtn = document.getElementById("login");
let logOutBtn = document.getElementById("logout-button");
let myForm = document.getElementById("login-form");
let searchBtn = document.querySelector(".search");
let searchInput = document.querySelector(".hidden-search");
console.log(searchBtn);
document
  .getElementById("login-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let users = [];
    let isValid = false;

    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        users = data;
      });

    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        isValid = true;
        break;
      }
    }
    function getIdFromUsername(username) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          return users[i].id;
        }
      }
    }

    if (isValid) {
      logInBtn.style.display = "none";
      myblog.removeAttribute("style", "display:hidden");
      logOutBtn.removeAttribute("style", "display:hidden");
      localStorage.setItem("loggedInUser", username);
      localStorage.setItem("loggedInUserId", getIdFromUsername(username));
      window.location.href = "myblog.html";
    } else {
      alert("Giriş başarısız. Geçersiz kullanıcı adı.");
    }
  });
logOutBtn.addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
  logOutBtn.setAttribute("hidden", "hidden");
  window.location.href = "main.html";
});
if (localStorage.getItem("loggedInUser") !== null) {
  myblog.removeAttribute("style", "display:hidden");
  logOutBtn.removeAttribute("style", "display:hidden");
  logInBtn.style.display = "none";
  myForm.style.display = "none";
}
searchBtn.onclick = function () {
  searchInput.classList.add("active-search");
  searchInput.classList.remove("hidden-search");
};
