window.onload = function() {
    axios.get('http://localhost:3000/api/users')
    .then(function(response) {
        const users = response.data;
        let usersHTML = '';
        for (let user of users) {
            usersHTML += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${user.username}</h5>
                        <p class="card-text">${user.email}</p>
                        <a href="user.html?id=${user._id}" class="btn btn-primary">View User</a>
                    </div>
                </div>
            `;
        }
        document.getElementById('users').innerHTML = usersHTML;
    })
    .catch(function(error) {
        console.log(error);
    });
};
