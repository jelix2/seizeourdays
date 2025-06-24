const form = document.getElementById("postForm");
form.onsubmit = e => {
  e.preventDefault();
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  const newPost = {
    title: form.title.value,
    image: form.image.value,
    content: form.content.value
  };
  posts.unshift(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));
  window.location.href = "index.html";
};
