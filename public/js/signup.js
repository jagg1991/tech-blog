const signupFormHandler = async (event) => {
    event.preventDefault();


    const user = document.querySelector('#user-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();



    if (user && password) {
        console.log('sucess')
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ user, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);