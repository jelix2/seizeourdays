
function savePost() {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const content = document.getElementById("content").value;

  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts.unshift({
    title,
    image,
    content,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("posts", JSON.stringify(posts));
  location.href = "index.html";
}
