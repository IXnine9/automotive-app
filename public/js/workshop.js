newFunction();
function newFunction() {
    window.onload = function () {
        axios.get('http://localhost:3000/api/workshops/me')
            .then(function (response) {
                const workshop = response.data;
                const workshopHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${workshop.name}</h5>
                    <p class="card-text">${workshop.description}</p>
                </div>
            </div>
        `;
                document.getElementById('workshop').innerHTML = workshopHTML;
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

