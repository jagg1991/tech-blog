const signupFormHandler = async (event) => {
    event.preventDefault();


    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();



    if (title && content) {
        console.log('sucess')
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title: title, content: content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.post-form')
    .addEventListener('submit', signupFormHandler);