window.onload = function() {
    axios.get('http://localhost:3000/api/users/me', { withCredentials: true })
    .then(function(response) {
        const user = response.data;
        document.getElementById('username').innerText = user.username;

        let dashboardHTML = '';
        if (user.type === 'carOwner') {
            dashboardHTML = `
                <p>You have ${user.orders.length} active orders.</p>
                <a href="orders.html" class="btn btn-primary">View Orders</a>
            `;
        } else if (user.type === 'serviceProvider') {
            dashboardHTML = `
                <p>You have ${user.bids.length} active bids.</p>
                <a href="bids.html" class="btn btn-primary">View Bids</a>
            `;
        }
        document.getElementById('dashboard').innerHTML = dashboardHTML;
    })
    .catch(function(error) {
        console.log(error);
    });
};
document.getElementById('logout-btn').addEventListener('click', function() {
    axios.post('http://localhost:3000/api/users/logout', {}, { withCredentials: true })
    .then(function(response) {
        window.location.href = 'login.html';
    })
    .catch(function(error) {
        console.log(error);
    });
});
