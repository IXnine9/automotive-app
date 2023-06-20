newFunction();
function newFunction() {
    window.onload = function () {
        axios.get('http://localhost:3000/api/orders/open')
            .then(function (response) {
                const orders = response.data;
                let ordersHTML = '';
                for (let order of orders) {
                    ordersHTML += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${order.description}</h5>
                        <p class="card-text">Auction ends: ${new Date(order.auctionEnds).toLocaleString()}</p>
                        <a href="place-bid.html?id=${order._id}" class="btn btn-primary">Place Bid</a>
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

