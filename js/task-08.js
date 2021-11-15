const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const objectFormElements = {
        mail: formElements.email.value,
        password: formElements.password.value,
    };

    if (objectFormElements.mail === "" || objectFormElements.password === "") {
        alert('Все поля должны быть заполнены!');
        
    };
    if (objectFormElements.mail !== "" && objectFormElements.password !== "") {
        console.log(objectFormElements);
        
    };

    event.currentTarget.reset();
    
};