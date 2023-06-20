newFunction();
function newFunction() {
    window.onload = function () {
        axios.get('http://localhost:3000/api/workshops/me/bids')
            .then(function (response) {
                const bids = response.data;
                let bidsHTML = '';
                for (let bid of bids) {
                    bidsHTML += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${bid.order.description}</h5>
                        <p class="card-text">Your bid: ${bid.price}</p>
                        <a href="order.html?id=${bid.order._id}" class="btn btn-primary">View Order</a>
                    </div>
                </div>
            `;
                }
                document.getElementById('bids').innerHTML = bidsHTML;
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

