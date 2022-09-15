console.log(countries)

const demoDiv = document.getElementById('info')

let result = ''
countries.forEach((demo) => {
    result += `
    <div class="col">
        <div class="card">
            <div class="img-container">
                <img src="${demo.flag}">
            </div>
            <h4>${demo.name}</h4>
            <p>Capital:${demo.capital}</p>
            <p>Language:${demo.languages}</p>
            <p>Population:${demo.population}</p>
        </div>
    </div>`
})
demoDiv.innerHTML = result;