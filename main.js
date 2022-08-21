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
let pokemonElegido
let pokemonRival

// SECCION BATALLA POKEMON

let sectionBatalla = document.getElementById("batalla")

/*********** DISCURSO ***********/

boton.onclick = () => {
    titulo.remove()
    intro.remove()
    //texto.style.display = "inherit"
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
                pokemonElegido = 1
                console.log(pokemonElegido)
                seleccionPoke.style.display = "none"
                sectionBatalla.style.display = "grid"
                consultarPokemones(pokemonElegido)
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
                pokemonElegido = 4
                console.log(pokemonElegido)
                seleccionPoke.style.display = "none"
                sectionBatalla.style.display = "grid"
                consultarPokemones(pokemonElegido)
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
                pokemonElegido = 7
                console.log(pokemonElegido)
                seleccionPoke.style.display = "none"
                sectionBatalla.style.display = "grid"
                consultarPokemones(pokemonElegido)
            })
        })
    })
})

/***********    BATALLA POKEMON ***********/

class Pokemon{
    constructor(nombre, numero, tipo, hp, ataque, ataqueEspecial, defensaEspecial, velocidad, nivel, hpMax){
        this.nombre = nombre;
        this.numero = numero;
        this.tipo = tipo;
        this.hp = hp;
        this.ataque = ataque;
        this.ataqueEspecial = ataqueEspecial;
        this.defensaEspecial = defensaEspecial;
        this.velocidad = velocidad;
        this.nivel = nivel;
        this.hpMax = hpMax;
    }
}


const bulbasaurObj = new Pokemon("bulbasaur", 01, "planta", 4, 22, "charmander", 22);

function elegirRival(inicial){
    if(inicial == 1){
        return 4;
    } else if(inicial == 4){
        return 7;
    } else if(inicial == 7){
        return 1;
    }
}


function consultarPokemon(id, num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response){
        response.json()
        .then(function(pokemon){
            crearPokemon(pokemon, num)
        })
    })
}



function consultarPokemones(pokemonElegido) {
    let segundoId = pokemonElegido
    let primerId = elegirRival(pokemonElegido)
    consultarPokemon(primerId, 1)
    consultarPokemon(segundoId, 2)
}

function crearPokemon(pokemon, num){
    // convertir data a html

    if(num == 1){
        let spriteRival = document.getElementById("spriteRival")
        spriteRival.setAttribute("src", pokemon.sprites.front_default)
    } else if (num == 2){
        let spriteInicial = document.getElementById("spriteInicial")
        spriteInicial.setAttribute("src", pokemon.sprites.back_default)
    }


    let nombre = document.getElementById(`nombre-${num}`)
    nombre.textContent = pokemon.name

    let hp = document.getElementById(`hp-${num}`)
    hp.textContent = pokemon.stats[0].base_stat
}

