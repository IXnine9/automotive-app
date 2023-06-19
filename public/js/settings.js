window.onload = function() {
    axios.get('http://localhost:3000/api/user-settings', { withCredentials: true })
    .then(function(response) {
        const user = response.data;
        document.getElementById('email').value = user.email;
    })
    .catch(function(error) {
        console.log(error);
    });

    document.getElementById('settings-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        axios.put('http://localhost:3000/api/user-settings', {
            email: email,
            password: password
        }, { withCredentials: true })
        .then(function(response) {
            alert('Account updated successfully!');
        })
        .catch(function(error) {
            console.log(error);
            alert('Failed to update account. Please try again.');
        });
    });
};
