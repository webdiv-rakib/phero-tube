function getTimeString(time) {
    // get hour and rest seconds
    const hour = parseInt(time / 3600);
    let remainingSeconds = time % 3600;
    const minute = parseInt(remainingSeconds / 60);
    remainingSeconds = remainingSeconds % 60;
    return `${hour} hour ${minute} minutes ${remainingSeconds} seconds ago`;
}

const loadVideos = () => {
    const url = 'https://openapi.programming-hero.com/api/phero-tube/videos';
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log(err))
}

const loadDetails = async (videoId) => {
    console.log(videoId)
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.video);
}

const displayDetails = (video) => {
    console.log(video);
    const detailContainer = document.getElementById("modal-content")
    detailContainer.innerHTML=`
    <img src="${video.thumbnail}"/>
    <p>${video.description}</p>
    `

    // way-1
    // document.getElementById("showModalData").click();

    // way-2
    document.getElementById("customModal").showModal();
}

const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = "";

    if (videos.length === 0) {
        videosContainer.classList.remove("grid")
        videosContainer.innerHTML = `
            <div class="min-h-screen flex flex-col gap-5 justify-center items-center">
            <img src="assets/Icon.png"/>
            <h2 class="text-center text-xl font-bold">NO CONTENT HERE</h2>
            </div>
        `;
        return;
    }
    else {
        videosContainer.classList.add("grid");
    }

    for (const video of videos) {
        const card = document.createElement('div');
        card.classList = 'card bg-base-100 w-96 shadow-sm';
        card.innerHTML = `
         <figure class="h-[200px] relative">
            <img class="h-full w-full object-cover"
                src=${video.thumbnail}
            alt="Shoes" />
            ${video.others.posted_date?.length == 0 ? '' : `<span class="absolute right-2 bottom-2 text-white bg-black rounded p-1 text-xs">${getTimeString(video.others.posted_date)}</span>`
            }
            
         </figure>
        <div class="card-body flex flex-row gap-5">
            <div>
                <img src=${video.authors[0].profile_picture} class="h-10 w-10 rounded-full" />
            </div>
            <div>
                <h2 class="font-bold">${video.title}</h2>
                <div class="flex flex-row justify-center items-center gap-3">
                    <p class="w-max">${video.authors[0].profile_name}</p>
                    ${video.authors[0].verified == true ? '<img src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" class="w-4 h-4"/>' : ''}
                </div>
                <p>${video.others.views} views</p>
                <button onclick="loadDetails('${video.video_id}')" class=" btn btn-sm">Details</button>
            </div>
        </div>
        `
        videosContainer.appendChild(card);
    }
}

loadVideos();