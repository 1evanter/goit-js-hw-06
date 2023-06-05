const listOfCategoriesRef = document.querySelector('#categories');
console.log('Number of categories:', listOfCategoriesRef.children.length);

const categoryItemRef = document.querySelectorAll('.item');

categoryItemRef.forEach(item => {
    const itemTitleRef = item.querySelector('h2');
    console.log('Category:', itemTitleRef.textContent);

    const itemElementsRef = item.querySelectorAll('li');
    console.log('Elements:', itemElementsRef.length)
});