newFunction();
function newFunction() {
    window.onload = function () {
        axios.get('http://localhost:3000/api/users/profile')
            .then(function (response) {
                const user = response.data;
                const profileHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">${user.email}</p>
                </div>
            </div>
        `;
                document.getElementById('profile').innerHTML = profileHTML;
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://localhost:300/api/orders')
            .then(function (response) {
                const orders = response.data;
                let ordersHTML = '';
                for (let order of orders) {
                    ordersHTML += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${order.description}</h5>
                        <p class="card-text">Auction ends: ${new Date(order.auctionEnds).toLocaleString()}</p>
                        <a href="order.html?id=${order._id}" class="btn btn-primary">View Order</a>
                    </div>
                </div>
            `;
                }
                document.getElementById('orders').innerHTML = ordersHTML;
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

