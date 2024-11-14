alert ("Bienvenido(a) a Cinemark, a continuacion te mostramos el menú de funciones!")

let productos = [
    { id: 1, pelicula: "Manhattan", sala: "1", costo: 3400, funcion: "21:10 horas", genero: "Drama"},
    { id: 2, pelicula: "Maridos y Mujeres", sala: "3", costo: 4000, funcion: "20:00 horas", genero: "Drama"},
    { id: 3, pelicula: "La Rosa Purpura del Cairo", sala: "5", costo: 3400, funcion: "20:15 horas", genero: "Ficcion"},
    { id: 4, pelicula: "Annie Hall ", sala: "9", costo: 4000, funcion: "18:20 horas", genero: "Comedia"},
    { id: 5, pelicula: "Bananas", sala: "2", costo: 3400, funcion: "17.00 horas", genero: "Comedia"},
    { id: 6, pelicula: "Scoop", sala: "4", costo: 3400, funcion: "19:50 horas", genero: "Drama"},
    { id: 7, pelicula: "Poderosa Afrodita", sala: "7", costo: 4000, funcion: "20.30 horas", genero: "Comedia"},
    { id: 8, pelicula: "La Tapadera", sala: "6", costo: 4500, funcion: "21:30 horas", genero: "Drama"},
    { id: 9, pelicula: "Desmontando a Harry", sala: "8", costo: 4500, funcion: "20.40 horas", genero: "Comedia"},
    { id: 9, pelicula: "La Zarpa", sala: "10", costo: 4000, funcion: "21.50 horas", genero: "Terror"},
]

let opcion
let generoDePeli

do{
    opcion = Number(prompt("Elige una de estas opciones:\n1 - Ver la lista completa de películas\n2 - Ver películas por género\n3 - Salir "))
    if (opcion === 1){
        let salida = ""
        salida += Number(prompt(productos.map(producto => producto.id + " - " + producto.pelicula).join("\n")))
        let resultado = salida.forEach((producto) => {
            console.log(producto.pelicula)
        })
        alert("Usted eligió la película " + resultado)
    } else if (opcion === 2){
        generoDePeli = Number(prompt("Elige una de estas opciones:\n1 - Comedia\n2 - Drama\n3 - Ficción\n4 - Terror\n5 - Salir "))
        if (generoDePeli === 1){
            let generoElegido = productos.filter(producto => producto.genero === "Comedia")
            generoElegido.forEach((producto) => {
                let generoComedia = "Elige una de estas opciones\n"
                generoComedia += Number(prompt(generoElegido.map(producto => producto.id + " - " + producto.pelicula).join("\n")))               
            })
        } else if (generoDePeli === 2) {
            let generoElegido = productos.filter(producto => producto.genero === "Drama")
            generoElegido.forEach((producto) => {
                let generoDrama = "Elige una de estas opciones\n"
                generoDrama += Number(prompt(generoElegido.map(producto => producto.id + " - " + producto.pelicula).join("\n")))               
            })
        } else if (generoDePeli === 3) {
            let generoElegido = productos.filter(producto => producto.genero === "Ficcion")
            generoElegido.forEach((producto) => {
                let generoFiccion = "Elige una de estas opciones\n"
                generoFiccion += Number(prompt(generoElegido.map(producto => producto.id + " - " + producto.pelicula).join("\n")))             
            })
        } else if (generoDePeli === 4) {
            let generoElegido = productos.filter(producto => producto.genero === "Terror")
            generoElegido.forEach((producto) => {
                let generoTerror = "Elige una de estas opciones\n"
                generoTerror += Number(prompt(generoElegido.map(producto => producto.id + " - " + producto.pelicula).join("\n"))) 

            })
        } else {
            break
        }
    } else {
        break
    }
} while (opcion !==0)


/* let snacks = [] */
/* productos.forEach ((producto) => {
    console.log(producto.funcion)
})

console.log(productos[1]) */
