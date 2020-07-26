const express=require('express')
const app=express();
app.get('/alumnos/:profesores1',function (request,response) {
   let profesores=request.params.profesores1
    let alumnos= ['Aitor','maria','iker','ander']
    let bbk;
  bbk=alumnos.push(profesores)
 
 response.send(bbk);

});

app.listen(3000) 

//Declara un array con los nombres de l@s estudiantes del BBK Bootcamp. Crea una aplicación en la que se puedan añadir elementos a ese array mediante el método get. Agrega los nombres de los profesores.