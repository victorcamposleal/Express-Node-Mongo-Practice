const express=require('express');
const app=express();

app.use(express.json());
app.use(express.static('public'));

let productos = {
    menus: [
       {nombre: 'Grand Big Boot', precio: 8.5},
       {nombre:  'Big Boot', precio: 8},
       {nombre: 'BootPollo', precio: 7.50},
       {nombre: 'Cuarto de libra',precio: 7},
       {nombre: 'BootRoyal Deluxe', precio: 7}
],
    hamburguesas: [
       {nombre:  'Grand Big Boot', precio: 6},
       {nombre:  'Big Boot', precio: 5.5},
       {nombre: 'BootPollo', precio: 5},
       {nombre: 'Cuarto de libra', precio: 4.5},
       {nombre: 'BootRoyal Deluxe', precio: 4.5}
    ],
   bebidas: [
       {nombre: 'CocaCola', precio: 2},
       {nombre: 'Fanta', precio: 2},
       {nombre: 'Agua', precio: 1},
       {nombre:  'Cerveza', precio: 2.5}
    ],
     patatas:[
       { nombre: 'BootFries', precio: 1},
],
}





app.get('/api/boodlands', function(request,response) {

    response.send(productos)
    
})

app.listen(3000)