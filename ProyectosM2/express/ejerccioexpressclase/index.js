//importamos el paquete express
const express= require('express');
//declaramos una constntante que es el servidor en este caso le pusimos app
const app=express();
// para poder ussar el servidor que declarammos con la variable app  lo mandamos llmar con listen
app.listen(3000);
//creamos la funcion get para que ejecute algo una funcion con dos parametros een una la peticion y la otra la respuesta que vayamos a recibir  
app.get('/',function(request,response){ 
//escrbimos el codigo que queramos
// escribimos la respuesta tiene que ser el mismo nombre
response.send('<h1>Hola Mundo<h1>')
} )
//nostros le podemos indicar la ruta que queramos mostar 
app.get('/nombre/de/la/ruta',function(request,response) {
    //simpre poner la variable reponse y el send
    response.send( [{
        nombre:"victor"
    },{
        nombre:"ander"
    },{
        nombre:"maria"
    },{
        nombre:"Aitor"
    },])   });

    // si va acambiar el nombre de la ruta le ponemos 2 puntos
    app.get('/persona/:nombre/:apellido', function(request,response) {
        //params es la variable de en la que le pasamos el .nombre que indroduce e usuario
        console.log(request.params)
     let lolox=request.params.nombre;
     let lolo=request.params.apellido
     response.send(`ok ${lolox}  ${lolo} `);
 
    })
