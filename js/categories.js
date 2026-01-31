/**
 * 1. Fetch, Lead and Show Categories on html
 */

// create loadCategories
const loadCategories = () => {
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log(err))
}

// const loadCategoryVideo = (id) => {
//     // alert(id);
//     fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
//         .then(res => res.json())
//         .then(data => displayVideos(data.category))
//         .catch(err => console.log(err))
// }

const loadCategoryVideo = (id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => displayVideos(data.category))
        .catch(err => console.log(err))
}



// create displayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    for (const item of categories) {
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
            <button class="btn bg-[#d3d3d3]" onclick="loadCategoryVideo(${item.category_id})">${item.category}</button>
        `
        categoryContainer.appendChild(buttonContainer);
    }
}



loadCategories();
