document.getElementById('post-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const youtube = document.getElementById('youtube').value;
  const link = document.getElementById('link').value;
  const coverFile = document.getElementById('cover').files[0];
  const images = Array.from(document.getElementById('images').files);

  if (!coverFile) {
    alert("Please upload a representative image.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    const thumbnailData = event.target.result;

    const post = {
      id: Date.now(),
      title,
      content,
      youtube,
      link,
      thumbnailData,
      date: new Date().toISOString(),
    };

    const posts = JSON.parse(localStorage.getItem('seizeourdays_posts') || '[]');
    posts.unshift(post);
    localStorage.setItem('seizeourdays_posts', JSON.stringify(posts));

    alert('Post saved!');
    window.location.href = 'main.html';
  };
  reader.readAsDataURL(coverFile);
});
