let params = new URL(window.location.href).searchParams;
let userId = params.get("UserId");
let postBody =params.get("PostBody")
let postTitle =params.get("PostTitle")
console.log(postBody)
console.log(userId)
console.log(postTitle)
 

let navbar = document.querySelector(".navbar-box")
let pageTitle = document.createElement("span")
pageTitle.style ="font-size: x-large; color:#fff;"
let ttl = postTitle;
pageTitle.innerText= ttl[0].toUpperCase() + ttl.substring(1);
navbar.append(pageTitle)



