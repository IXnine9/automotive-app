document.getElementById('create-order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const auctionEnds = document.getElementById('auctionEnds').value;

    axios.post('http://localhost:3000/api/orders', {
        description: description,
        auctionEnds: auctionEnds
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
