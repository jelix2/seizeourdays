document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('post-feed');
  const posts = JSON.parse(localStorage.getItem('seizeourdays_posts') || '[]');

  if (posts.length === 0) {
    container.innerHTML = '<p style="text-align:center;">No posts yet. Click + Write to add one!</p>';
    return;
  }

  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${post.thumbnailData}" alt="Post Image"/>
      <h2>${post.title}</h2>
      <p>${new Date(post.date).toLocaleDateString()}</p>
    `;
    container.appendChild(card);
  });
});
