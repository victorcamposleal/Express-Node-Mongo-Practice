const express = require('express');
const app = express();

let personas = [
    {
        nombre: 'iker',
        apellido: 'murga',
        edad: 40
    },
    {
        nombre: 'jon',
        apellido: 'sinde',
        edad: 70
    },
];

app.get('/personas', function (req, res) {
    let mensaje = '<ul>';
    for (let i = 0; i < personas.length; i++) {
        let nombre = personas[i].nombre;
        let apellido = personas[i].apellido;
        let edad = personas[i].edad;
        mensaje += `<li>${nombre} ${apellido} ${edad}</li>`
    }
    mensaje += '</ul>';
    console.log(mensaje);
    res.send(mensaje);
});

app.listen(3000)