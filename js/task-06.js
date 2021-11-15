const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    
    if (input.value.length === 6)   { 
        input.setAttribute("class", "valid");
    }
    else input.setAttribute("class", "invalid");
         
    
});
