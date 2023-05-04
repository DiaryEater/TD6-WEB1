
const register = document.getElementById('register');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_confirmation = document.getElementById('password-confirmation');
const join = document.getElementById('join');

register.addEventListener('click', () => {
    register.style.display = 'none';
    form.style.display = 'block';
    // register.style.position = 'relative';
    // register.style.position = 'absolute'
})
join.addEventListener('click', () => {
    if (username.value != "" && email.value != "" && password.value != "" && password_confirmation != ""){
        form.style.display = 'none';

        alert(`HeLLo ${username.value} ! Welcome here. A message will be sent to you to ${email.value} to confirm you identity`)
    
    } else if (password.value != password_confirmation.value){
        alert('Sorry, password disjointed. Retry with password uniform')
    
    } else { alert('Please, fill all the register'); 
    }
    
})

