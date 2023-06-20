newFunction();
function newFunction() {
    window.onload = function () {
        axios.get('http://localhost:3000/api/faqs')
            .then(function (response) {
                const faqs = response.data;
                let faqsHTML = '';
                for (let i = 0; i < faqs.length; i++) {
                    faqsHTML += `
                <h4>${faqs[i].question}</h4>
                <p>${faqs[i].answer}</p>
            `;
                }
                document.getElementById('faqs').innerHTML = faqsHTML;
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

