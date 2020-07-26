const express=require('express');
const app=express();

app.use(express.static('public'))
app.get('/persona',function(request,response){
let nombre= request.query.nombre
response.send(`hola ${nombre}  <a href="/datos.html">volver</a> `)
});


app.listen(3000);