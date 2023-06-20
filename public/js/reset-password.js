newFunction();
function newFunction() {
    document.getElementById('reset-password-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;

        axios.post('http://localhost:3000/api/users/reset-password', {
            email: email
        })
            .then(function (_response) {
                alert('Password reset link sent to your email!');
            })
            .catch(function (error) {
                console.log(error);
                alert('Failed to send password reset link. Please try again.');
            });
    });
}

