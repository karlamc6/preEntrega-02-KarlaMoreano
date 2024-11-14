alert ("Bienvenido(a) a Cinemark, a continuacion te mostramos el menú de funciones!")

let productos = [
    { id: 1, pelicula: "Manhattan", sala: "1", costo: "3400 pesos", funcion: "21:10 horas", genero: "Drama"},
    { id: 2, pelicula: "Maridos y Mujeres", sala: "3", costo: "4000 pesos", funcion: "20:00 horas", genero: "Drama"},
    { id: 3, pelicula: "La Rosa Purpura del Cairo", sala: "5", costo: "3400 pesos", funcion: "20:15 horas", genero: "Ficcion"},
    { id: 4, pelicula: "Annie Hall ", sala: "9", costo: "4000 pesos", funcion: "18:20 horas", genero: "Comedia"},
    { id: 5, pelicula: "Bananas", sala: "2", costo: "3400 pesos", funcion: "17.00 horas", genero: "Comedia"},
    { id: 6, pelicula: "Scoop", sala: "4", costo: "3400 pesos", funcion: "19:50 horas", genero: "Drama"},
    { id: 7, pelicula: "Poderosa Afrodita", sala: "7", costo: "4000 pesos", funcion: "20.30 horas", genero: "Comedia"},
    { id: 8, pelicula: "La Tapadera", sala: "6", costo: "4500 pesos", funcion: "21:30 horas", genero: "Drama"},
    { id: 9, pelicula: "Desmontando a Harry", sala: "8", costo: "4500 pesos", funcion: "20.40 horas", genero: "Comedia"},
    { id: 10, pelicula: "La Zarpa", sala: "10", costo: "4000 pesos", funcion: "21.50 horas", genero: "Terror"},
]

let opcion
let generoDePeli

do{
    opcion = Number(prompt("Elige una de estas opciones:\n1 - Ver la lista completa de películas\n2 - Ver películas por género\n3 - Salir "))
    if (opcion === 1){
        let salida = Number(prompt(productos.map(producto => producto.id + " - " + producto.pelicula).join("\n")))
        const peliculaBuscada = productos.find(producto => producto.id === salida)
        console.log(peliculaBuscada)
        alert("Usted eligió mirar la película " + peliculaBuscada.pelicula + ", su sala es " + peliculaBuscada.sala + ", el costo total a pagar es de " + peliculaBuscada.costo + " y su función inicia a las " + peliculaBuscada.funcion + ". Te esperamos en Cinemark!")
        break
    } else if (opcion === 2){
        generoDePeli = Number(prompt("Elige una de estas opciones:\n1 - Comedia\n2 - Drama\n3 - Ficción\n4 - Terror\n5 - Salir "))
        if (generoDePeli === 1){
            let generoComedia = productos.filter(producto => producto.genero === "Comedia")
            let comediaLista = Number(prompt(generoComedia.map(producto => producto.id + " - " + producto.pelicula).join("\n")))
            const comediaElegida = productos.find(producto => producto.id === comediaLista)
            console.log(comediaElegida)
            alert("Usted eligió mirar la película " + comediaElegida.pelicula + ", su sala es " + comediaElegida.sala + ", el costo total a pagar es de " + comediaElegida.costo + " y su función inicia a las " + comediaElegida.funcion + ". Te esperamos en Cinemark!")
            break
        } else if (generoDePeli === 2) {
            let generoDrama = productos.filter(producto => producto.genero === "Drama")
            let dramaLista = Number(prompt(generoDrama.map(producto => producto.id + " - " + producto.pelicula).join("\n")))
            const dramaElegida = productos.find(producto => producto.id === dramaLista)
            console.log(dramaElegida)
            alert("Usted eligió mirar la película " + dramaElegida.pelicula + ", su sala es " + dramaElegida.sala + ", el costo total a pagar es de " + dramaElegida.costo + " y su función inicia a las " + dramaElegida.funcion + ". Te esperamos en Cinemark!")
            break
        } else if (generoDePeli === 3) {
            let generoFiccion = productos.filter(producto => producto.genero === "Ficcion")
            let ficcionLista = Number(prompt(generoFiccion.map(producto => producto.id + " - " + producto.pelicula).join("\n")))
            const ficcionElegida = productos.find(producto => producto.id === ficcionLista)
            console.log(ficcionElegida)
            alert("Usted eligió mirar la película " + ficcionElegida.pelicula + ", su sala es " + ficcionElegida.sala + ", el costo total a pagar es de " + ficcionElegida.costo + " y su función inicia a las " + ficcionElegida.funcion + ". Te esperamos en Cinemark!")
            break
        } else if (generoDePeli === 4) {
            let generoTerror = productos.filter(producto => producto.genero === "Terror")
            let terrorListo = Number(prompt(generoTerror.map(producto => producto.id + " - " + producto.pelicula).join("\n")))
            const terrorElegido = productos.find(producto => producto.id === terrorListo)
            console.log(terrorElegido)
            alert("Usted eligió mirar la película " + terrorElegido.pelicula + ", su sala es " + terrorElegido.sala + ", el costo total a pagar es de " + terrorElegido.costo + " y su función inicia a las " + terrorElegido.funcion + ". Te esperamos en Cinemark!")
            break
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
