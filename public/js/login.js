document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.post('http://localhost:3000/api/users/login', {
        email: email,
        password: password
    })
    .then(function(response) {
        // Handle success
        console.log(response);
    })
    .catch(function(error) {
        // Handle error
        console.log(error);
    });
});
