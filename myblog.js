let username = localStorage.getItem("loggedInUser");
let UserId = localStorage.getItem("loggedInUserId");
console.log(username)
document.getElementById("greeting").innerHTML = username;
let logOutBtn = document.getElementById("logout-button");
document.getElementById("logout-button").addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
  logOutBtn.setAttribute("hidden", "hidden");
  window.location.href = "main.html";
});
if (localStorage.getItem("loggedInUser") == null) {
  logOutBtn.setAttribute("hidden", "hidden");
}
if (localStorage.getItem("loggedInUser") !== null) {
  document.getElementById("greeting").innerHTML = username;
}
let postTitleInput, postBodyInput;

let addPostBtn = document.createElement("button");
addPostBtn.innerHTML = "Add Post";
addPostBtn.classList.add("add-button");
let bdy = document.body;

let postContainer = document.createElement("div");
postContainer.classList.add("post-container");
postContainer.append(addPostBtn);
bdy.append(postContainer);
addPostBtn.addEventListener("click", function () {
  postTitleInput = document.createElement("input");
  postTitleInput.setAttribute("type", "text");
  postTitleInput.setAttribute("placeholder", "Enter post title");
  postTitleInput.setAttribute("id", "post-title-input");

  postBodyInput = document.createElement("input");
  postBodyInput.setAttribute("type", "text");
  postBodyInput.setAttribute("placeholder", "Enter post body");
  postBodyInput.setAttribute("id", "post-body-input");

  let savePostBtn = document.createElement("button");
  savePostBtn.innerText = "Save post";
  savePostBtn.setAttribute("id", "save-post-button");

  postContainer.appendChild(postTitleInput);
  postContainer.appendChild(postBodyInput);
  postContainer.appendChild(savePostBtn);

  savePostBtn.addEventListener("click", function () {
    let postCard = document.createElement("div");
    postCard.classList.add("post-card");

    let postTitleDiv = document.createElement("div");
    postTitleDiv.innerText = "Title: " + postTitleInput.value;
    postTitleDiv.classList.add("post-title");

    let postBodyDiv = document.createElement("div");
    postBodyDiv.innerText = "Body: " + postBodyInput.value;

    postCard.appendChild(postTitleDiv);
    postCard.appendChild(postBodyDiv);

    postContainer.appendChild(postCard);

    postContainer.removeChild(postTitleInput);
    postContainer.removeChild(postBodyInput);
    if ((postBodyInput, postTitleInput !== "")) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "PUT",
        body: JSON.stringify({
          title: postTitleInput.value,
          body: postBodyInput.value,
          userId: UserId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  });
});
