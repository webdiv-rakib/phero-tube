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

const removeActiveClass = () => {
    const buttons = document.getElementsByClassName("category-btn");
    for(let btn of buttons){
        btn.classList.remove('active')
    }
}
const loadCategoryVideo = (id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            // remove active class from all
            removeActiveClass();
            // active only given id
            const activeBtn = document.getElementById(`btn-${id}`)
            activeBtn.classList.add("active")
            displayVideos(data.category)
        })
        .catch(err => console.log(err))
}

// create displayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    for (const item of categories) {
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
            <button id="btn-${item.category_id}" class="btn bg-[#d3d3d3] category-btn" onclick="loadCategoryVideo(${item.category_id})">${item.category}</button>
        `
        categoryContainer.appendChild(buttonContainer);
    }
}



loadCategories();
