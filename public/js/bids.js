const newLocal = newFunction();
function newFunction() {
    return window.onload = function () {
        axios.get('http://localhost:3000/api/bids')
            .then(function (response) {
                const bids = response.data;
                let bidsHTML = '';
                for (let bid of bids) {
                    bidsHTML += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${bid.order.description}</h5>
                        <p class="card-text">Bid: ${bid.price}</p>
                        <a href="bid.html?id=${bid._id}" class="btn btn-primary">View Bid</a>
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

