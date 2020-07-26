const express= require('express')
const app=express()
let random=require('./random.js')
let arreglo=require('./array.js')
app.get('/number',function(request,response) {


    console.log(random());
    console.log(arreglo)

response.send(arreglo)
    console.log(arreglo)
})

app.listen(3000)