let params = new URL(window.location.href).searchParams;
let userId = params.get("UserId");
let postBody = params.get("PostBody");
let postTitle = params.get("PostTitle");
let imageUrl = params.get("imageUrl")
let backBtn= document.querySelector(".back-button")
console.log(imageUrl)

let navbar = document.querySelector(".navbar-box");
let pageTitle = document.createElement("h1");
pageTitle.style = "font-size: x-large; color:wheat;"
pageTitle.innerText = postTitle;
navbar.append();

let postDetails = document.querySelector(".post-details");

let postTitleElement = document.createElement("h2");
postTitleElement.style = "text-align: center; margin-top: 30px;";
postTitleElement.innerText = postTitle;

let postBodyElement = document.createElement("p");
postBodyElement.style = "text-align: justify; margin: 30px;";
postBodyElement.innerText = postBody;

let imageBox = document.querySelector(".image-box")
let image = document.createElement("img")
image.classList.add("image")
image.src = imageUrl;
imageBox.append(image)


postDetails.append(postTitleElement);
postDetails.append(postBodyElement);

