//const queryString = window.location.search         //elle est bonne
//console.log(queryString)

const urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.searchParams.get('id'))


//const myURL = new URL('https://example.org/?abc=123');
//console.log(myURL.searchParams.get('abc'));



//const kanapId = urlParams.get("?=_id")
//console.log({kanapId})





/*




fetch('http://localhost:3000/api/products/?${kanapId}')              
    .then((response)=> response.json())
    .then((res) => handleData(res))


    // tout ce qui suit est à l'intérieur du fetch


function handleData(Kanap){                                 //je récupère toute les donnéees du Kanap
    console.log({Kanap})
    const {altTxt, colors, description, imageUrl,name, price}= Kanap//et je les passe à make... de chacun d'esu
    makeImage(imageUrl, altTxt)
    makeColor(colors)
    makeDescription(description)
    makeTitle(name)
    makePrice(price)

}

function makeImage(imageUrl, altTxt){                       //pour chaque donnée respective je lui associe un élement corresponddant du html 
    const image = document.createElement('img')
    image.src = imageUrl
    image.alt = altTxt
    const parent= document.querySelector(".item__img")
    parent.appendChild(image)
}
function makeTitle(name){
    const h1 = document.querySelector("#title")
    h1.textContent = name
}
function makePrice(price) {
    const span = document.querySelector("#price")               //attention le prix à ne pas mettre dans le localstorage
    const h3 = document.querySelector("#price")
    h3.textContent = price
}

function makeDescription(description){
    const p = document.querySelector("#description")
    p.textContent = description
}

function makeColor(colors){
    const select = document.querySelector("#colors")
    if (select != null){
        colors.forEach((color) =>{
            const option = document.createElement("option")
            option.value = color
            option.textContent = color
            select.appendChild(option)
        })
    }
}


*/