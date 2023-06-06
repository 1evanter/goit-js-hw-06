const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', handleFormSubmit);

const formInfo = {};

function handleFormSubmit(event) {
    event.preventDefault();
 
    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;
    
    if (email.value === '' || password.value === '') {
        alert('Fill in all the fields.')
    } else {
        formInfo.email = email.value;
        formInfo.password = password.value;
    }

    console.log(formInfo);
 event.currentTarget.reset();
}
 