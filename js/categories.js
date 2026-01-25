console.log('video script added');
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

// category
// : 
// "Music"
// category_id
// : 
// "1001"
// [[Prototype]]
// : 
// Object

// create displayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    for (const item of categories) {
        console.log(item)
        // create a button for each category
        const button = document.createElement('button');
        button.classList = 'btn bg-[#d3d3d3]';
        button.innerText = item.category;

        // add button to category container
        categoryContainer.appendChild(button);
    }
}



loadCategories();
