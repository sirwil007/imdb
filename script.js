const inp = document.querySelector("#inputSearch")
const sBtn = document.querySelector(".search button")
const resultContainer = document.querySelector(".result")

let expression = ""

let result = []

inp.addEventListener("change", e => {
    expression = e.target.value
})


const displayResult = () => {
    resultContainer.innerHTML = ""

    result.forEach(item => {
        let div = document.createElement("div")
        div.className = "card"

        let h3 = document.createElement("h3")
        h3.innerText = item.title
        let img = document.createElement("img")
        img.src = item.image

        div.appendChild(h3)
        div.appendChild(img)
        resultContainer.appendChild(div)
    })
}

sBtn.addEventListener("click", () => {
    fetch(`https://imdb-api.com/en/API/SearchMovie/k_72950zt4/${expression}`)
        .then(res => res.json()
            .then(res => {
                result = res.results
                displayResult()
            }))

}