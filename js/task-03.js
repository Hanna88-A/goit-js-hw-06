const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const listElements = document.querySelector('.gallery')
// const cards = images.map(option => {
//   const cardEl = document.createElement('li')
//   cardEl.classList.add('animals');
//   const cardElImg = document.createElement('img')
//   cardElImg.src = option.url;
//   cardElImg.alt = option.alt;
//   cardElImg.classList.add('item-animal')
  
//   cardEl.appendChild(cardElImg);
 
//   return cardEl
  
// })
// console.log(...cards)
// listElements.append(...cards)

// ---------------------------------------------------

const listElements = document.querySelector('.gallery')

const cards = images.map(option =>
`<li class="animals"><img src ="${option.url}" alt ="${option.alt}" class="item-animal"></li>`).join("");

listElements.insertAdjacentHTML("beforeend", cards);
