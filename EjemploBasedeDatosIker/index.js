const express = require('express');

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
const MongoClient = require('mongodb').MongoClient;

let db;
let coleccionLibros;
MongoClient.connect('mongodb+srv://usuario:123456l@cluster0-gpmhd.mongodb.net/libros?retryWrites=true&w=majority', function(err, client) {
    if(err!== null) {
        console.log(err);
    } else {
        db = client.db('tienda');
        coleccionLibros = db.collection('libros');
    }
});

const app = express();

app.use(express.json());

app.get('/libros', function(req, res) {
    db.collection('libros').find().toArray(function(err, datos) {
        if(err!==null) {
            res.send(err);
        } else {
            res.send(datos);
        }
    });
});

app.post('/aniadirLibro/', function(req, res) {
    let titulo = req.body.titulo;
    let autor = req.body.autor;
    let libro = { titulo : titulo, autor: autor, tipoProducto: 'libro' };
    db.collection('libros').insertOne(libro, function(err, datos) {
        if(err !== null) {
            console.log(err);
            res.send('error con la base de datos' + err);
        } else {
            console.log(datos);
            res.send(`Añadido: ${titulo} - ${autor}`);
        }
    });
   
});

app.listen(3000);