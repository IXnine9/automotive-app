newFunction();
function newFunction() {
    window.onload = function () {
        axios.get('http://localhost:3000/api/workshops')
            .then(function (response) {
                const workshops = response.data;
                let workshopsHTML = '';
                for (let workshop of workshops) {
                    workshopsHTML += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${workshop.name}</h5>
                        <p class="card-text">${workshop.description}</p>
                        <a href="workshop.html?id=${workshop._id}" class="btn btn-primary">View Workshop</a>
                    </div>
                </div>
            `;
                }
                document.getElementById('workshops').innerHTML = workshopsHTML;
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

