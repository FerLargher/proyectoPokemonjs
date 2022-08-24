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
let pokedex = [];

for (let i = 1; i < 26; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((data) => {
            const pokemon = {
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,

                id: data.id,

                tipo: data.types[0].type.name,

                nombre: data.name,

                hp: data.stats[0].base_stat,

                ataque: data.stats[1].base_stat,

                defensa: data.stats[2].base_stat,

                especial: data.stats[3].base_stat,
            };
            pokedex.push(pokemon);
        });
}


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


function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function comprobarMuerte(hp){
    if(hp > 0){
        return false;
    } else {
        return true;
    }
}

function elegirRival(inicial){
    if(inicial == 1){
        return 4;
    } else if(inicial == 4){
        return 7;
    } else if(inicial == 7){
        return 1;
    }
}
function obtenerHP(base){
    return Math.round(10 + (5 / 100 * (base *2 + 15 + 1) + 5)) 
}

function obtenerOtraStat(base){
    //return Math.round(((((base + 15) * 2 + ((Math.sqrt(1))/ 4)) * 5)/100) +5) 
    return Math.round((Math.floor(0.01 * (2 * base + 15 + Math.floor(0.25 * 1)) * 5) + 5))                
}

function crearObjetoPokemon(pokemon){
    let poke = new Pokemon(pokemon.name, 
        pokemon.id, 
        pokemon.types[0].type.name, 
        obtenerHP(pokemon.stats[0].base_stat),
        obtenerOtraStat(pokemon.stats[1].base_stat),
        obtenerOtraStat(pokemon.stats[2].base_stat),
        obtenerOtraStat(pokemon.stats[3].base_stat),
        obtenerOtraStat(pokemon.stats[4].base_stat),
        5,
        obtenerHP(pokemon.stats[0].base_stat))
        return poke
}

function batallaPokemon(rival, inicial){
    console.log("BATALLA!")
    let atacar = document.getElementById("atacar")
    let hpRival = document.getElementById(`hp-1`)
    let hpInicial = document.getElementById(`hp-2`)
    let spriteRival = document.getElementById("spriteRival")
    let spriteInicial = document.getElementById("spriteInicial")
    let textoBatalla = document.getElementById("textoBatalla")
    atacar.addEventListener("click", ()=>{
        if(random(1,10) <= 9){
            // colocar algun mensaje diciendo xpokemon ataco y saco tanta vida
            rival[0].hp -= inicial[0].ataque
            hpRival.innerText = rival[0].hp
            console.log(`${rival[0].nombre} a sufrido ${inicial[0].ataque} de daño`)
            if(comprobarMuerte(rival[0].hp)){
                hpRival.innerText = 0
                console.log(`${rival[0].nombre} a sido debilitado`)
                spriteRival.style.transition = "ease 3s"
                spriteRival.style.opacity = 0
                pelea.remove()
                curar.remove()
                textoBatalla.style.display = "flex"
                textoBatalla.style.backgroundColor = "green"
                mensaje.innerText = `${inicial[0].nombre} vencio a ${rival[0].nombre}`
                textoBatalla.addEventListener("click", () =>{
                    sectionBatalla.innerHTML = ""
                    alert('Felicidades , ganaste!')
                })
            }
        } else {
            inicial[0].hp -= rival[0].ataque
            hpInicial.innerText = inicial[0].hp
            console.log(`${inicial[0].nombre} a sufrido ${rival[0].ataque} de daño`)
            if(comprobarMuerte(inicial[0].hp)){
                hpInicial.innerText = 0
                console.log(`${inicial[0].nombre} a sido debilitado`)
                spriteInicial.style.transition = "ease 3s"
                spriteInicial.style.opacity = 0
                pelea.remove()
                curar.remove()
                textoBatalla.style.display = "flex"
                textoBatalla.style.backgroundColor = "red"
                mensaje.innerText = `${rival[0].nombre} vencio a ${inicial[0].nombre}`
                textoBatalla.addEventListener("click", () =>{
                    sectionBatalla.innerHTML = ""
                    alert('Lastima , perdiste!')
                })
            }
        }
    })
}



function consultarPokemon(id, num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response){
        response.json()
        .then(function(pokemon){
            crearPokemon(pokemon, num)
            localStorage.setItem(`pokemon_${id}`, JSON.stringify(pokemon))
        })
    })
}

function obtenerLocalStorage(pokemonElegido){
    let poke = JSON.parse(localStorage.getItem(`pokemon_${pokemonElegido}`))
    return poke;
}


function consultarPokemones(pokemonElegido) {
    let aliado = pokemonElegido
    let enemigo = elegirRival(pokemonElegido)
    consultarPokemon(enemigo, 1)
    consultarPokemon(aliado, 2)
    let equipo = [crearObjetoPokemon(obtenerLocalStorage(pokemonElegido))]
    let equipoRival = [crearObjetoPokemon(obtenerLocalStorage(enemigo))]
    console.log(equipo[0].ataque)
    console.log(equipo[0].hp)
    batallaPokemon(equipoRival, equipo)
}

function crearPokemon(pokemon, num){
    // convertir data a html
    if(num == 1){
        let spriteRival = document.getElementById("spriteRival")
        spriteRival.setAttribute("src", pokemon.sprites.front_default)
        let nombreRival = document.getElementById(`nombre-${num}`)
        nombreRival.textContent = pokemon.name
        let hpRival = document.getElementById(`hp-${num}`)
        hpRival.textContent = obtenerHP(pokemon.stats[0].base_stat)
        let hpTotalRival = document.getElementById("hpTotalRival")
        hpTotalRival.textContent = obtenerHP(pokemon.stats[0].base_stat)
    } else if (num == 2){
        let spriteInicial = document.getElementById("spriteInicial")
        spriteInicial.setAttribute("src", pokemon.sprites.back_default)
        let nombreInicial = document.getElementById(`nombre-${num}`)
        nombreInicial.textContent = pokemon.name
        let hpInicial = document.getElementById(`hp-${num}`)
        hpInicial.textContent = obtenerHP(pokemon.stats[0].base_stat)
        let hpTotalInicial = document.getElementById("hpTotalInicial")
        hpTotalInicial.textContent = obtenerHP(pokemon.stats[0].base_stat)
    }
}
