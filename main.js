const boton = document.querySelector(".playButton button")
const titulo = document.getElementById("titulo")
const intro = document.getElementById("intro")
const seccionDiscurso = document.getElementById("discurso")
let cuerpo = document.getElementById("cuerpoHtml")

let divSprite = document.createElement("div")
let divDiscurso = document.createElement("div")
divSprite.setAttribute("id", "divSprite")
divDiscurso.setAttribute("id", "divDiscurso")
let oakSprite = document.createElement("img")
let texto = document.createElement("p");
oakSprite.src = "./img/oak.png"
texto.setAttribute("id", "texto")

let seleccionPoke = document.getElementById("seleccionPokemon");


boton.onclick = () => {
    titulo.remove()
    intro.remove()
    texto.innerHTML = "¡Hola! Me llamo Oak, soy el profesor en la region de kanto"
    seccionDiscurso.appendChild(divSprite)
    seccionDiscurso.appendChild(divDiscurso)
    divSprite.appendChild(oakSprite)
    divDiscurso.appendChild(texto)
}

let formNombre = document.createElement("form")
formNombre.setAttribute("id", "form")
let inputNombre = document.createElement("input")
inputNombre.setAttribute("type", "text")
inputNombre.setAttribute("id", "input")
let submitNombre = document.createElement("input")
submitNombre.setAttribute("type", "submit")
submitNombre.setAttribute("value", "enviar")
let nombreUser;

texto.addEventListener("click", () => {
    texto.innerHTML = "Antes de seguir con tu aventura me gustaria saber tu nombre"
    texto.addEventListener("click", () => {
        texto.remove();
        divDiscurso.appendChild(formNombre)
        formNombre.appendChild(inputNombre)
        formNombre.appendChild(submitNombre)
        formNombre.addEventListener("submit", (e) => {
            e.preventDefault();
            nombre = document.querySelector("#input").value;
            inputNombre.remove()
            submitNombre.remove()
            divDiscurso.appendChild(texto);
            texto.innerHTML = `¡${nombre}, preparate porque tu aventura pokemon esta a punto de empezar!`
            texto.addEventListener("click", () => {
                divSprite.textContent = ""
                divDiscurso.textContent = ""
                seleccionPoke.style.display = "flex"
                seccionDiscurso.style.display = "none"
            })
        })
    })
})

/*******        FUNCION ABRIR Y CERRAR POKEBALL         ******/
let pokebolaCerrada = document.getElementById("cerrada");
let pokebolaAbierta = document.getElementById("abierta");

function cerrar(){
    divPokebola.addEventListener("mouseleave", () => {
        pokebolaCerrada.style.display = "none"
        pokebolaAbierta.style.display = "initial"
    })
}

function abrir(){
    divPokebola.addEventListener("mouseenter", () => {
        pokebolaCerrada.style.display = "initial" 
        pokebolaAbierta.style.display = "none"
    })
}

/*******        APARECER BULBASAUR         ******/
let divPokebola = document.getElementById("pokebola")
let bulbasaurDescripcion = document.getElementById("bulbasaur")

divPokebola.addEventListener("mouseenter", () =>{
    abrir()
    bulbasaurDescripcion.style.display = "initial"
})

divPokebola.addEventListener("mouseleave", () =>{
    bulbasaurDescripcion.style.display = "none"
    cerrar()
})

/*******        APARECER CHARMANDER         ******/
let divPokebola2 = document.getElementById("pokebola2")
let charmanderDescripcion = document.getElementById("charmander")

divPokebola2.addEventListener("mouseenter", () =>{
    abrir()
    charmanderDescripcion.style.display = "initial"
})

divPokebola2.addEventListener("mouseleave", () =>{
    cerrar()
    charmanderDescripcion.style.display = "none"
})

/*******        APARECER SQUIRTLE         ******/
let divPokebola3 = document.getElementById("pokebola3")
let squirtleDescripcion = document.getElementById("squirtle")

divPokebola3.addEventListener("mouseenter", () =>{
    abrir()
    squirtleDescripcion.style.display = "initial"
})

divPokebola3.addEventListener("mouseleave", () =>{
    cerrar()
    squirtleDescripcion.style.display = "none"
})


////////////////// validar
seleccionPoke = document.getElementById("seleccionPokemon")
let divPokebolasIniciales = document.getElementById("pokebolasIniciales")
let divPokemonIniciales = document.getElementById("pokemonIniciales")

let botones = document.getElementById("botones")
let subtitulo = document.getElementById("subtitulo")
let botonSi = document.querySelector(".botonSi")
let botonNo = document.querySelector(".botonNo")

// CREO QUE NO APARECE EL POKEMON PORQUE AL HACER MOUSELEAVE LA DESCRIPCION DEL POKE
// VUELVE A PONERSE EN NONE, AVERIGUAR FORMA DE SOLUCIONAR



divPokebola.addEventListener("click", () => {
    bulbasaurDescripcion.style.display = "initial"
    console.log(bulbasaurDescripcion.style.display)
    subtitulo.innerText = "Estas seguro?"
    divPokebolasIniciales.style.display = "none"
    botones.style.display = "flex"
    botonNo.addEventListener("click", () => {
        subtitulo.innerText = "Elige a tu pokemon"
        divPokebolasIniciales.style.display = "flex"
        botones.style.display = "none"
    })
    botonSi.addEventListener("click", () =>{
        subtitulo.innerText = "Felicidades has elegido a bulbasaur"
        botones.style.display = "none"
    })
})


divPokebola2.addEventListener("click", () => {
    subtitulo.innerText = "Estas seguro?"
    charmanderDescripcion.style.display = "initial"
    divPokebolasIniciales.style.display = "none"
    botones.style.display = "flex"
})

divPokebola3.addEventListener("click", () => {
    subtitulo.innerText = "Estas seguro?"
    squirtleDescripcion.style.display = "initial"
    divPokebolasIniciales.style.display = "none"
    botones.style.display = "flex"
})