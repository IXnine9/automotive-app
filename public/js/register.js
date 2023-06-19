document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.post('http://localhost:3000/api/register', {
        username: username,
        email: email,
        password: password
    })
    .then(function(response) {
        alert('Registration successful!');
        window.location.href = 'login.html';
    })
    .catch(function(error) {
        console.log(error);
        alert('Registration failed. Please try again.');
    });
});
