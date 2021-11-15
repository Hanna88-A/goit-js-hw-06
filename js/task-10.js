const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
}



  
let amount = 0;
let size = 20;
refs.input.addEventListener('input', (event) => {
  amount = Number(event.target.value);
  
})

refs.buttonCreate.addEventListener('click', () => {
  createBoxes(amount);
})

refs.buttonDestroy.addEventListener('click', () => {
  destroyBoxes();
})
 
function createBoxes() {
  for (let i = 0; i < amount; i += 1) {
    
    let boxes = document.createElement('div');
    
    size += 10;
    boxes.style.width = `${size}px`;
    boxes.style.height = `${size}px`;
    boxes.classList = 'create-box';
    boxes.style.backgroundColor = getRandomHexColor();

    refs.divBoxes.append(boxes);
    console.log(boxes);
   
  }
  
}

function destroyBoxes() {
  
  refs.divBoxes.innerHTML = '';
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
