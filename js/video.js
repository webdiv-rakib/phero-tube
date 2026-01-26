const loadVideos = () => {
    const url = 'https://openapi.programming-hero.com/api/phero-tube/videos';
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log(err))
}

const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos');
    for (const video of videos) {
        console.log(video);
        const card = document.createElement('div');
        card.classList = 'card bg-base-100 w-96 shadow-sm';
        card.innerHTML = `
         <figure class="h-[200px]">
            <img class="h-full w-full object-cover"
                src=${video.thumbnail}
                    alt="Shoes" />
         </figure>
        <div class="card-body">
            <div>
                <img src=${video.authors[0].profile_picture} class="h-10 w-10 rounded-full" />
            </div>
            <div>
                <h2>${video.title}</h2>
                <p>${video.authors[0].profile_name}</p>
                <p></p>
            </div>
        </div>
        `
        videosContainer.appendChild(card);
    }
}

loadVideos();