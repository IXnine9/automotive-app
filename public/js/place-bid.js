newFunction();
function newFunction() {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('id');

    window.onload = function () {
        axios.get(`http://localhost:3000/api/orders/${orderId}`)
            .then(function (response) {
                const order = response.data;
                const orderHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${order.description}</h5>
                    <p class="card-text">Auction ends: ${new Date(order.auctionEnds).toLocaleString()}</p>
                </div>
            </div>
        `;
                document.getElementById('order').innerHTML = orderHTML;
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    document.getElementById('place-bid-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const price = document.getElementById('price').value;

        axios.post(`http://localhost:3000/api/orders/${orderId}/bids`, {
            price: price
        })
            .then(function (response) {
                // Handle success
                console.log(response);
            })
            .catch(function (error) {
                // Handle error
                console.log(error);
            });
    });
}

