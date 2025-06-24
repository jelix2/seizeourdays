
const posts = JSON.parse(localStorage.getItem("posts") || "[]");
const container = document.getElementById("postContainer");

posts.forEach(post => {
  const div = document.createElement("div");
  div.className = "post";
  div.innerHTML = `
    <img src="${post.image}" alt="대표 이미지">
    <h2>${post.title}</h2>
    <p>${post.date}</p>
  `;
  container.appendChild(div);
});
