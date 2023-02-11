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
let addPostBtn = document.createElement("button");
addPostBtn.innerHTML="Add Post"
let bdy = document.body;
  let postContainer = document.createElement("div");
  postContainer.append(addPostBtn)
  bdy.append(postContainer)
addPostBtn.addEventListener("click", function () {
  


  let postTitleInput = document.createElement("input");
  postTitleInput.setAttribute("type", "text");
  postTitleInput.setAttribute("placeholder", "Enter post title");
  postTitleInput.setAttribute("id", "post-title-input");

  let postBodyInput = document.createElement("input");
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
    let postTitle = document.getElementById("post-title-input").value;
    let postBody = document.getElementById("post-body-input").value;

    let postTitleDiv = document.createElement("div");
    postTitleDiv.innerText = "Title: " + postTitle;

    let postBodyDiv = document.createElement("div");
    postBodyDiv.innerText = "Body: " + postBody;

    postContainer.removeChild(postTitleInput);
    postContainer.removeChild(postBodyInput);
    postContainer.removeChild(savePostBtn);

    postContainer.appendChild(postTitleDiv);
    postContainer.appendChild(postBodyDiv);
  });
});

