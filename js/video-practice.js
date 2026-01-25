const loadVideos = () => {
    const url = 'https://openapi.programming-hero.com/api/phero-tube/videos'
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log(err))
}
const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos');
    for (const video of videos) {
        const card = document.createElement('div');
        card.classList = 'card bg-base-100 w-96 shadow-sm';
        card.innerHTML = `<figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `
        videosContainer.appendChild(card);
    }
}
loadVideos();