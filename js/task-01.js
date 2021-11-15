const quantityСategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${quantityСategories.length}`);

const titleСategories = document.querySelectorAll('h2');
const quantitySubcategories = document.querySelectorAll('.item ul');

console.log(`Category: ${titleСategories[0].textContent}`);
console.log(`Elements: ${quantitySubcategories[0].children.length}`);

console.log(`Category: ${titleСategories[1].textContent}`);
console.log(`Elements: ${quantitySubcategories[1].children.length}`);

console.log(`Category: ${titleСategories[2].textContent}`);
console.log(`Elements: ${quantitySubcategories[2].children.length}`);




