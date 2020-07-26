const express=require('express')
const app=express();
let animales=[{nombre:'perro',tipo:'pastor',edad:18}, {nombre:'gato',tipo:'bengala',edad:20},{nombre:'cocodrilo',tipo:'verde',edad:19}]

app.use(express.static('pucblic'));

app.get('/',function(request,response) {

    
   response.send(animales)
    
        
    })

app.get('/sumar-animal',function(request,response) {
let nombre=request.query.nombre;
let tipo=request.query.tipo;
let edad=parseInt(request.query.edad);
let animale={nombre:nombre,tipo:tipo,edad:edad}
animales.push(animale)

let acumulado='';

let acumulado2='';

let acumulado1='';

for (let i = 0; i < animales.length; i++) {
    if (animales[i].nombre===animales[i].nombre) {

    acumulado+=`<h1>${animales[i].nombre}<h1>`
    }
if (animales[i].tipo===animales[i].tipo) {
       
    acumulado+=`<h1>${animales[i].tipo}<h1>`
   }

   if (animales[i].edad===animales[i].edad) {
       
    acumulado+=`<p>${animales[i].edad}<p>`
   }
 

}
response.send(`<h1>${acumulado}<h1> <h1><a href='index.html'>volver a añadir mas</a><h1>
`);


console.log(acumulado)
})


app.get('/adoptar',function(request,response) {
    let nombre=request.query.nombre;
    let animalesMod=[];
for (let i = 0; i < animales.length; i++) {
    if (nombre!==animales[i].nombre) {
animalesMod.push(animales[i])

        }

    }

    let acumulado='';
    
    for (let i = 0; i < animalesMod.length; i++) {


        if (animalesMod[i].nombre==animalesMod[i].nombre) {
    
        acumulado+=`<h1>${animalesMod[i].nombre}<h1>`
        }
    if (animalesMod[i].tipo===animalesMod[i].tipo) {
           
        acumulado+=`<h1>${animalesMod[i].tipo}<h1>`
       }
    
       if (animalesMod[i].edad===animalesMod[i].edad) {
           
        acumulado+=`<p>${animalesMod[i].edad}<p>`
       }
     
    
    }
    response.send(`<h1>${acumulado}<h1>  
    <h1><a href='index.html'>volver a añadir mas</a><h1> `)

    
})
app.listen(3000)