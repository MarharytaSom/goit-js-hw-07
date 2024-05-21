const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.getElementsByClassName('item');

console.log(`Number of categories: ${categoriesItems.length}`);

for (let i = 0; i < categoriesItems.length; i++) {
    const category = categoriesItems[i];
    const categoryName = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('li');


  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
}