const express=require('express');
const app=express();

app.get('/',function(request,response) {
    response.send('<h1>hola mundo</h1>');
    
});

app.get('/despedida',function(request,response) {
    response.send('<h1>bon voyage</h1>');
    
});

app.get('/personas',function(request,response) {
   response.send( [{nombre:'macarena'},
   {nombre:'rober'},
   {nombre:'Jimena'}])
});


app.get('/persona/:nombre',function (request,response) {
    let nombre=request.params.nombre;
    response.send(`<h1>Hola  ${nombre}</h1>`)
    
})



app.get('/persona/:nombre/:apellido',function (request,response) {
    let nombre=request.params.nombre;
    let apellido=request.params.apellido;
    response.send(`<h1>Hola  ${nombre} ${apellido}</h1>`)
    
});


app.get('/triangulo/:base/:altura',function(request, res){
    let base = parseInt(request.params.base);
    let altura = parseInt(request.params.altura);
    let area = (base*altura)/2;
    res.send(`${area}`);
});

app.get('/cuadrado/:base/:altura',function(request, res){
    let base = parseInt(request.params.base);
    let altura =parseInt(request.params.altura);
    let area = (base*altura);
    res.send(`${area}`);
});


app.listen(3000);

let sumar=require('./sumar.js')
console.log(sumar(4,5))


// vamos a tener que usar express para crear el servidor
    // para usar express, tenemos que importar el paquete
    // para poder importar un paquete, tenemos que crear el propio
        // npm init    ó    npm init -y
    
    // instalabamos el paquete (lo añadiamos a las dependencias y lo descargabamos a node_modules)
        // en consola: npm install express     ó    npm i express
        ​
        // una vez tenemos express en nuestro proyecto, lo tenemos que importar
            // -- const express = require('express');
        ​
        // una vez importado, tenemos que ejecutarlo     -- let servidor = express();
        ​
        // definir las rutas
            // servidor.get() 
            // dentro del servidor.get() ponemos 2 parametros
                // 1 - la ruta
                // 2 - la funcion(request, response) {} 
                // 3 - dentro de la función tenemos que tener un response.send()
        ​
        // teniamos que arrancar el servidor y asignarlo a un puerto
            // servidor.listen(número de puerto)
        ​
        // arrancar el servidor desde la consola con node index.js
        // después comprobamos que funcione con
            // localhost:numerodepuerto/ruta
        