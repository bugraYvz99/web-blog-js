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
      let postUser = document.createElement("h1");
      postUser.classList.add("username");
      postUser.innerText = getUserFromId(post.userId).name + "-" + post.title;
      postBox.append(postUser);
      posts.append(postBox);
      let postBody = document.createElement("div");
      postBody.classList.add("post-body");
      postBody.innerText = post.body;
      postBox.append(postBody);
      postBox.id = post.id;
    });
  }

  getPostsToHtml();
}

postsToInnerHtml();

function onloadPostHtml() {
  preloader.style.display = "none";
}

