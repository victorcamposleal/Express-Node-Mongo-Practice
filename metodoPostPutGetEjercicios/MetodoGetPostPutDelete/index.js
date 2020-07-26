const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());

let nombres = [{ nombre: "Victor", apellido: "CamposL", edad: 29 },
{ nombre: "Ander", apellido: "Brk", edad: 29 },
{ nombre: "Carlos", apellido: "Adam", edad: 29 },
{ nombre: "Jorge", apellido: "Peart", edad: 29 }]


let acumulado = "";
//haciendo metodo GET sin usar un query directamente en consola
app.get('/personas', function (reuqest, response) {



    for (let i = 0; i < nombres.length; i++) {
        acumulado += `<h1>${nombres[i].nombre}</h1> <h1>${nombres[i].apellido}</h1> 
        <h1>${nombres[i].edad}</h1>`
    }
    response.send(`${acumulado}`)
})

//Metodo Post haciendo el metodo Post
app.post('/personas', function (request, response) {
 let name = request.body.nombre
let surname = request.body.apellido
 let age = parseInt(request.body.edad)
 let datos = {
 nombre: name,
apellido: surname,
 edad: age
}

nombres.push(datos);
console.log(nombres);
response.send(nombres)


 })

//metodo put
app.put('/personas', function (request, response) {
    let name = request.body.nombre
    let surname = request.body.apellido
    let age = parseInt(request.body.edad)
  

    for (let i = 0; i < nombres.length; i++) {
        if (name===nombres[i].nombre) {
            nombres[i].nombre=name
            nombres[i].apellido=surname
            nombres[i].edad=age
            }}

    console.log(nombres);
    response.send(nombres)


})

// metodo DELETE
app.delete('/personas', function (request, response) {
    let name = request.body.nombre
    let surname = request.body.apellido
    let age = parseInt(request.body.edad)
  let nombresNuevo;


    for (let i = 0; i < nombres.length; i++) {
    if(name===nombres[i].nombre){
        console.log(nombres[i].apellido)
    nombres.splice([i],1)
    }
}
console.log(nombres);
    response.send(nombres)


})

app.listen(3001)