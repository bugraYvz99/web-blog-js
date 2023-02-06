async function postsToInnerHtml() {
  let users = [];
  let posts = [];

  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      users = data;
    });
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      posts = data;
    });

  function getUserFromId(id) {
    let currentUser = users.find((user) => user.id === id);
    return currentUser;
  }
  function getPostsToHtml() {
    posts.forEach(function (post) {
      let posts = document.querySelector(".posts");
      let postBox = document.createElement("div");
      postBox.classList.add("post-box");
      let upperDiv = document.createElement("div")
      upperDiv.classList.add("upper-div")
      let postTitle = document.createElement("h1");
      postTitle.classList.add("post-title");
      postTitle.autocapitalize = post.title
      postTitle.innerText = post.title;
      upperDiv.append(postTitle)
      postBox.append(upperDiv);
      let postBody = document.createElement("div");
      postBody.classList.add("post-body");
      postBody.innerText = post.body;
      postBox.append(postBody);
      postBox.id = post.id;
      let lowerDiv = document.createElement("div")
      lowerDiv.classList.add("lower-div")
      let postUserName = document.createElement("h2");
      postUserName.classList.add("post-username")
      postUserName.innerText = "Author :"+getUserFromId(post.userId).name;
      lowerDiv.append(postUserName)
      postBox.append(lowerDiv)
      let readMoreBtn= document.createElement("button")
      readMoreBtn.classList.add("readmore-button")
      readMoreBtn.innerText = "Read More";
      readMoreBtn.onclick = function() {
       
        window.location.href = "detailedPost.html?UserId=" + post.userId + "?PostBody="+ post.body;

       
      }
      postBox.append(readMoreBtn)
      posts.append(postBox)
      console.log(post)
    });
  }

  getPostsToHtml();
}

postsToInnerHtml();

function onloadPostHtml() {
  debugger
    let preloader = document.getElementById("preloader")
    preloader.style.display = "none";
}
let myblog = document.getElementById("myblog");
if (localStorage.getItem("loggedInUser") !== null) {
  myblog.removeAttribute("style", "display:hidden");
}
