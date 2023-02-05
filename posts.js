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
      let postBox = document.querySelector(".posts");
      let postDom = document.createElement("div");
      let postUser = document.createElement("span");
      postUser.classList.add("username");
      postUser.innerText = getUserFromId(post.userId).name;
      postDom.append(postUser);
      postBox.append(postDom);
    });
  }

  console.log(getPostsToHtml());
}

postsToInnerHtml();
