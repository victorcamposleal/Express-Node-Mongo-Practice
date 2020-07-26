const express = require('express');
const app = express();


//decimos al servidor que use archivos estáticos. indicamos el nombre y ruta de la carpeta (en este caso 'public');
//como este método está antes que las rutas .get, cada vez que llegue una petición el servidor mirará en esta carpeta
//si hay algún archivo que coincida con la ruta. si coincide, devolverá ese archivo y, si no coincide, mirará en las rutas
//.get definidas más abajo


//el orden en el que pongamos el método .use y los métodos .get es importante. el servidor ejecutará el código de arriba hacia abajo
//y la primera coinicidencia que encuentre será la que se ejecuta. 
app.use(express.static('public'));


app.get('/ruta/:nombre',function(req,res){

    res.send('ruta raíz');
})


//si escribimos en el navegador ruta/persona.html el servidor primero buscará un archivo con ese nombre en la carpeta public. si no
//existe, ejecutará este método .get
app.get('/persona.html',function(req,res){
    res.send("persona");
})

app.get('/persona',function(req,res){
    let nombre = req.query.nombre;
    let apellido = req.query.apellido;
    res.send('tu nombre es '+nombre + " "+apellido);
});





app.listen(3000);