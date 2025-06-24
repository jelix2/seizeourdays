const feed = document.getElementById("post-feed");
let posts = JSON.parse(localStorage.getItem("posts")) || [];

function render() {
  feed.innerHTML = "";
  posts.forEach((post, i) => {
    const div = document.createElement("div");
    div.className = "post-card";
    div.onclick = () => openPost(i);
    div.innerHTML = \`
      <img src="\${post.image}" alt="Cover Image" />
      <h3>\${post.title}</h3>
    \`;
    feed.appendChild(div);
  });
}
function openPost(index) {
  const post = posts[index];
  const w = window.open("", "_blank");
  w.document.write(\`
    <html><head><title>\${post.title}</title><meta charset="UTF-8">
    <style>body{font-family:sans-serif;padding:2rem;} img{max-width:100%;} iframe{max-width:100%;height:315px;}</style></head>
    <body><h1>\${post.title}</h1>\${convertEmbed(post.content)}</body></html>
  \`);
}
function convertEmbed(text) {
  return text.replace(/(https:\/\/www\.youtube\.com\/watch\?v=)([\w-]+)/g,
    (_, __, id) => \`<iframe src="https://www.youtube.com/embed/\${id}" frameborder="0" allowfullscreen></iframe>\`)
    .replace(/\n/g, "<br>");
}
render();
