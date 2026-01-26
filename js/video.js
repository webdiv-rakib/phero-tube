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
        <div class="card-body flex flex-row gap-5">
            <div>
                <img src=${video.authors[0].profile_picture} class="h-10 w-10 rounded-full" />
            </div>
            <div>
                <h2 class="font-bold">${video.title}</h2>
                <div class="flex flex-row justify-center items-center gap-3">
                    <p>${video.authors[0].profile_name}</p>
                    <img src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" class="w-4 h-4"/>
                </div>
            </div>
        </div>
        `
        videosContainer.appendChild(card);
    }
}

loadVideos();