/******         DECLARACION DE VARIABLES         ******/ 

// PANTALLA INICIAL

let cuerpo = document.getElementById("cuerpoHtml")
const boton = document.querySelector(".playButton button")
const titulo = document.getElementById("titulo")
const intro = document.getElementById("intro")


// SECCION DISCURSO

let seccionDiscurso = document.getElementById("discurso")
let divSprite = document.createElement("div")
let divDiscurso = document.createElement("div")
let oakSprite = document.createElement("img")
let texto = document.createElement("p");
let formNombre = document.createElement("form")
let inputNombre = document.createElement("input")
let submitNombre = document.createElement("input")
let nombreUser;
oakSprite.src = "./img/oak.png"
divSprite.setAttribute("id", "divSprite")
divDiscurso.setAttribute("id", "divDiscurso")
texto.setAttribute("id", "texto")
formNombre.setAttribute("id", "form")
inputNombre.setAttribute("type", "text")
inputNombre.setAttribute("id", "input")
submitNombre.setAttribute("type", "submit")
submitNombre.setAttribute("value", "enviar")


// SECCION SELECCION POKEMON

let seleccionPoke = document.getElementById("seleccionPokemon");
let pokebolaCerrada = document.getElementById("cerrada");
let pokebolaAbierta = document.getElementById("abierta");
let divPokebolasIniciales = document.getElementById("pokebolasIniciales")
let divPokemonIniciales = document.getElementById("pokemonIniciales")
let botones = document.getElementById("botones")
let subtitulo = document.getElementById("subtitulo")
let botonSi = document.querySelector(".botonSi")
let botonNo = document.querySelector(".botonNo")


// CONSTRUCTOR DE POKEMON

class Pokemon{
    constructor(nombre, numero, tipo, ataque, hp, rival, hpMax){
        this.nombre = nombre;
        this.numero = numero;
        this.tipo = tipo;
        this.ataque = ataque;
        this.hp = hp;
        this.rival = rival;
        this.hpMax = hpMax;
    }
}

class Objetos{
    constructor(nombre, cantidad){
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

const bulbasaur = new Pokemon("bulbasaur", 01, "planta", 4, 22, "charmander", 22);
const charmander = new Pokemon("charmander", 04, "fuego", 6, 18, "squirtle", 18);
const squirtle = new Pokemon("squirtle", 07, "agua", 8, 16, "bulbasaur", 16);
const pidgey = new Pokemon("Pidgey", 16, "Volador", 4, 10, "", 10);
const rattata = new Pokemon("Rattata", 19, "Normal", 4, 10, "", 10);
let listaPokemon = [bulbasaur, charmander, squirtle, pidgey, rattata]
let equipoPokemon = []

// BATALLA POKEMON

let divBatallaPokemon = document.getElementById("batallaPokemon")


/*********** DISCURSO ***********/

boton.onclick = () => {
    titulo.remove()
    intro.remove()
    texto.innerHTML = "¡Hola! Me llamo Oak, soy el profesor en la region de kanto"
    seccionDiscurso.appendChild(divSprite)
    seccionDiscurso.appendChild(divDiscurso)
    divSprite.appendChild(oakSprite)
    divDiscurso.appendChild(texto)
}

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

/********************   SELECCION POKEMON   ******************/

//FUNCION ABRIR Y CERRAR POKEBALL

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

// APARECER BULBASAUR
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

//  APARECER CHARMANDER
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

//  APARECER SQUIRTLE
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

// VALIDAR SELECCION POKEMON

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
        subtitulo.addEventListener("click", () =>{
            subtitulo.innerText = "¡Un rival aparecio y te desafia a una batalla!"
            subtitulo.addEventListener("click", () =>{
                seleccionPoke.style.display = "none"
                divBatallaPokemon.style.display = "grid"
            })
        })
    })
})

divPokebola2.addEventListener("click", () => {
    subtitulo.innerText = "Estas seguro?"
    charmanderDescripcion.style.display = "initial"
    divPokebolasIniciales.style.display = "none"
    botones.style.display = "flex"
    botonNo.addEventListener("click", () => {
        subtitulo.innerText = "Elige a tu pokemon"
        divPokebolasIniciales.style.display = "flex"
        botones.style.display = "none"
    })
    botonSi.addEventListener("click", () =>{
        subtitulo.innerText = "Felicidades has elegido a charmander"
        botones.style.display = "none"
        subtitulo.addEventListener("click", () =>{
            subtitulo.innerText = "¡Un rival aparecio y te desafia a una batalla!"
            subtitulo.addEventListener("click", () =>{
                seleccionPoke.style.display = "none"
                divBatallaPokemon.style.display = "grid"
            })
        })
    })
})

divPokebola3.addEventListener("click", () => {
    subtitulo.innerText = "Estas seguro?"
    squirtleDescripcion.style.display = "initial"
    divPokebolasIniciales.style.display = "none"
    botones.style.display = "flex"
    botonNo.addEventListener("click", () => {
        subtitulo.innerText = "Elige a tu pokemon"
        divPokebolasIniciales.style.display = "flex"
        botones.style.display = "none"
    })
    botonSi.addEventListener("click", () =>{
        subtitulo.innerText = "Felicidades has elegido a squirtle"
        botones.style.display = "none"
        subtitulo.addEventListener("click", () =>{
            subtitulo.innerText = "¡Un rival aparecio y te desafia a una batalla!"
            subtitulo.addEventListener("click", () =>{
                seleccionPoke.style.display = "none"
                divBatallaPokemon.style.display = "grid"
            })
        })
    })
})



/***********    BATALLA POKEMON ***********/

/*
const batallaPokemon = document.querySelector("#batallaPokemon")

function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}
fetchPokemon(1) // esta me trae a bulbasaur

function fetchPokemons(numero){
    for (let i = 1; i < numero; i++) {
        fetchPokemon(i)
    }
}   // esta trae un conjunto de pokemon desde el 1 hasta el numero que elija
// mi idea era traer por ejemplo los primeros 25 y guardarlos en un array para acceder 
// a sus datos cuando quiera

let equipoPokemon = []
let equipoRival = []
let statusEnemigo = document.querySelector("#statusEnemigo")
let hpRival = document.querySelector("#hpRival")
let hpTotalRival = document.querySelector("#hpTotalRival")

/*
function crearPokemon(pokemon){
    const spriteFrente = document.createElement("img")
    spriteFrente.src = pokemon.sprites.front_default
    const spriteAtras = document.createElement("img")
    spriteAtras.src = pokemon.sprites.back_default
    const nombre = document.createElement("p")
    nombre.textContent = pokemon.name
    const hp = document.createElement("p")
    hp.textContent = pokemon.stats[0].base_stat
}*/ 
// Esta ultima crea un pokemon para ponerlo en el html pero 
// no me sirve para lo que quiero
