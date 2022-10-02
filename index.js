const express = require('express')
const app = express()


app.use(express.static(__dirname + "/assets"))

const usuarios = ["Juan", "Jocelyn", "Astrid", "Maria", "Ignacia", "Jabier", "brian"]

app.get("/Abracadabra/juego/:usuario", (req, res, next) => {
    const tipoJugador = usuarios.find(jugador => jugador === req.params.usuario)

    if(!tipoJugador) return res.redirect("/who.jpeg")

    next()
})

app.get("/Abracadabra/juego/:usuario", (req, res) => {
    res.sendFile(__dirname + "/assets/index.html")
})

app.get("/Abracadabra/usuarios", (req, res) => {
    res.json({usuarios})
})

app.get("/Abracadabra/conejo/:n", (req, res) => {
    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min)
    }

    const numero = random(1, 4)
    const eleccion = req.params.n

    console.log(numero, eleccion)

    if(numero == eleccion) return res.redirect("/conejito.jpg")
    else return res.redirect("/voldemort.jpg")

})

app.get('*', (req, res) => {
    res.status(404).send('hoooh...!! sorry, esta página no existe 😅')
})

app.listen(3000, () => console.log("Server UP 😎🤙 http://localhost:3000/"))