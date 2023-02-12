let logOutBtn = document.querySelector("#logout-button");
let myblog = document.getElementById("myblog");
async function postsToInnerHtml() {
  let users = [];
  let posts = [];
  let imageUrls = [];

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
  for (i = 0; i < posts.length; i++) {
    imageUrls.push(`https://picsum.photos/id/${i}/800/600`);
  }
  function getUserFromId(id) {
    let currentUser = users.find((user) => user.id === id);
    return currentUser;
  }

  function getPostsToHtml() {
    posts.forEach(function (post, index) {
      let postsDiv = document.querySelector(".posts");
      let postBox = document.createElement("div");
      postBox.classList.add("post-box");
      let upperDiv = document.createElement("div");
      upperDiv.classList.add("upper-div");
      let postTitle = document.createElement("h1");
      postTitle.classList.add("post-title");
      let ttl = post.title;
      postTitle.innerText = ttl[0].toUpperCase() + ttl.substring(1);

      let imgDom = document.createElement("img");
      imgDom.src = imageUrls[index];
      imgDom.classList.add("post-img");
      imgDom.setAttribute("style", "background:cover;");
      upperDiv.append(imgDom);

      upperDiv.append(postTitle);
      postBox.append(upperDiv);

      let postBody = document.createElement("div");
      postBody.classList.add("post-body");
      postBody.innerText = post.body;
      postBox.append(postBody);
      postBox.id = post.id;

      let lowerDiv = document.createElement("div");
      lowerDiv.classList.add("lower-div");
      let postUserName = document.createElement("h2");
      postUserName.classList.add("post-username");
      postUserName.innerText = "Author :" + getUserFromId(post.userId).name;
      lowerDiv.append(postUserName);
      postBox.append(lowerDiv);
      let readMoreBtn = document.createElement("button");
      readMoreBtn.setAttribute("type", "submit");
      readMoreBtn.classList.add("readmore-button");
      readMoreBtn.innerText = "Read More";

      readMoreBtn.onclick = function () {
        window.location.href = `detailedPost.html?UserId=${post.userId}&PostBody=${post.body}&PostTitle=${post.title}&imageUrl=${imgDom.src}`;
      };
      lowerDiv.append(readMoreBtn);
      postsDiv.append(postBox);
    });
  }

  getPostsToHtml();
}

postsToInnerHtml();

function onloadPostHtml() {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

if (localStorage.getItem("loggedInUser") !== null) {
  myblog.removeAttribute("style", "display:hidden");
  logOutBtn.removeAttribute("style", "display:hidden");
  logInBtn.style.display = "none";
  myForm.style.display = "none";
}
