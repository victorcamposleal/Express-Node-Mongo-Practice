const express=require('express')
const app=express();

app.use(express.static('public'));

app.get('/persona',function(req,response){


let nombre=req.query.nombre;
let apellido=req.query.apellido;
response.send('tu nombre es ' +nombre+"  "+apellido);

});
app.listen(3000)