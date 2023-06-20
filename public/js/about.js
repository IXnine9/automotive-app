const newLocal = newFunction();
function newFunction() {
    return window.onload = function () {
        axios.get('http://localhost:3000/api/team')
            .then(function (response) {
                const team = response.data;
                let teamHTML = '';
                for (let i = 0; i < team.length; i++) {
                    teamHTML += `
                <h4>${team[i].name}</h4>
                <p>${team[i].role}</p>
            `;
                }
                document.getElementById('team').innerHTML = teamHTML;
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

