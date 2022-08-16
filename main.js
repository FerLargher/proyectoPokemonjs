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

// SECCION BATALLA POKEMON
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

const bulbasaur = new Pokemon("bulbasaur", 01, "planta", 4, 22, "charmander", 22);
const charmander = new Pokemon("charmander", 04, "fuego", 6, 18, "squirtle", 18);
const squirtle = new Pokemon("squirtle", 07, "agua", 8, 16, "bulbasaur", 16);
let sectionBatalla = document.getElementById("batalla")
let divBatallaPokemon = document.getElementById("batallaPokemon")
let pokemonElegido = 1
let pokemonElegidoRival = elegirPokemonRival(pokemonElegido)
let pokedex = []
let equipo = []
let equipoRival = []
let hpRival = document.getElementById("hpRival")
let hpTotalRival = document.getElementById("hpTotalRival")
let hpPokemonInicial = document.getElementById("hpPokemonInicial")
let hpTotalInicial = document.getElementById("hpTotalInicial")
let nombreRival = document.getElementById("nombreRival")
let nombreInicial = document.getElementById("nombreInicial")
let spriteRival = document.getElementById("spriteRival")
let spriteInicial = document.getElementById("spriteInicial")
let atacar = document.getElementById("atacar")
let curar = document.getElementById("curar")
let pelea = document.getElementById("pelea")
let acciones = document.getElementById("acciones")
let textoBatalla = document.getElementById("textoBatalla")
let mensaje = document.getElementById("mensaje")

pokedex.push(bulbasaur, charmander, squirtle)
equipo.push(pokedex[pokemonElegido])
equipoRival.push(pokedex[pokemonElegidoRival])
hpRival.innerText = equipoRival[0].hp
hpTotalRival.innerText = equipoRival[0].hpMax
hpPokemonInicial.innerText = equipo[0].hp
hpTotalInicial.innerText = equipo[0].hpMax
nombreRival.innerText = equipoRival[0].nombre.toUpperCase()
nombreInicial.innerText = equipo[0].nombre.toUpperCase()

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
                pokemonElegido = 0
                console.log(pokemonElegido)
                seleccionPoke.style.display = "none"
                sectionBatalla.style.display = "initial"
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
                pokemonElegido = 1
                console.log(pokemonElegido)
                seleccionPoke.style.display = "none"
                sectionBatalla.style.display = "initial"
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
                pokemonElegido = 2
                console.log(pokemonElegido)
                seleccionPoke.style.display = "none"
                sectionBatalla.style.display = "initial"
            })
        })
    })
})

/***********    BATALLA POKEMON ***********/

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function elegirPokemonRival(inicial){
    if(inicial == 0){
        return 1
    } else if (inicial == 1){
        return 2
    } else if(inicial == 2){
        return 0
    }
}

function elegirSpriteRival(inicial, sprite){
    if(inicial == 0){
        sprite.src = "./img/charmander_front.gif"
    } else if (inicial == 1){
        sprite.src = "./img/squirtle_front.gif"
    } else if (inicial == 2){
        sprite.src = "./img/bulbasaur_front.gif"
    }
}

function elegirSpriteInicial(inicial, sprite){
    if(inicial == 0){
        sprite.src = "./img/bulbasaur_back.gif"
    } else if (inicial == 1){
        sprite.src = "./img/charmander_back.gif"
    } else if (inicial == 2){
        sprite.src = "./img/squirtle_back.gif"
    }
}

function comprobarMuerte(hp){
    if(hp > 0){
        return false;
    } else {
        return true;
    }
}

elegirSpriteRival(pokemonElegido, spriteRival)
elegirSpriteInicial(pokemonElegido, spriteInicial)

atacar.addEventListener("click", ()=>{
    if(random(1,10) <= 6){
        // colocar algun mensaje diciendo xpokemon ataco y saco tanta vida
        equipoRival[0].hp -= equipo[0].ataque
        hpRival.innerText = equipoRival[0].hp
        console.log(`${equipoRival[0].nombre} a sufrido ${equipo[0].ataque} de daño`)
        if(comprobarMuerte(equipoRival[0].hp)){
            hpRival.innerText = 0
            console.log(`${equipoRival[0].nombre} a sido debilitado`)
            spriteRival.style.transition = "ease 3s"
            spriteRival.style.opacity = 0
            pelea.remove()
            curar.remove()
            textoBatalla.style.display = "flex"
            textoBatalla.style.backgroundColor = "green"
            mensaje.innerText = `${equipo[0].nombre} vencio a ${equipoRival[0].nombre}`
            textoBatalla.addEventListener("click", () =>{
                //Swal.fire("Felicidades , ganaste!")
                alert("ganaste")
                sectionBatalla.innerHTML = ""
            })
        }
    } else {
        equipo[0].hp -= equipoRival[0].ataque
        hpPokemonInicial.innerText = equipo[0].hp
        console.log(`${equipo[0].nombre} a sufrido ${equipoRival[0].ataque} de daño`)
        if(comprobarMuerte(equipo[0].hp)){
            hpPokemonInicial.innerText = 0
            console.log(`${equipo[0].nombre} a sido debilitado`)
            spriteInicial.style.transition = "ease 3s"
            spriteInicial.style.opacity = 0
            pelea.remove()
            curar.remove()
            textoBatalla.style.display = "flex"
            textoBatalla.style.backgroundColor = "red"
            mensaje.innerText = `${equipoRival[0].nombre} vencio a ${equipo[0].nombre}`
            textoBatalla.addEventListener("click", () =>{
                //Swal.fire("Lastima , perdiste!")
                alert("perdiste")
                sectionBatalla.innerHTML = ""
            })
        }
    }
})