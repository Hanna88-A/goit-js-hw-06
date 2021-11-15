const userName = document.querySelector('#name-input');
console.log(userName);
const userGreeting = document.querySelector('#name-output');
console.log(userGreeting);

  
userName.addEventListener('input', (event) => {
    userName.textContent = event.currentTarget.value;
    userGreeting.textContent = userName.textContent;
    if (userName.textContent === '') {
        userGreeting.textContent = 'Anonymous';
    };
});
  



