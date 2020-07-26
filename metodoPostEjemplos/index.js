const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))

app.get('/persona',function(request,response) {
let nombre=request.query.nombre
let apellido=request.query.apellido
let edad=request.query.edad
response.send(`${nombre} ${edad} ${apellido}`)
} );

// el servidor recibe el objeto que le he enviado antes
//lo prepara en un objeto y me lo envia
app.post('/persona',function(request,response){
    let nombre=request.body.nombre;
    let apellido=request.body.apellido;
    let edad=request.body.edad;
    let personaje={
        name:nombre,
        apelle:apellido,
        age:edad
    };
    response.send(personaje)

})



app.listen(3000)