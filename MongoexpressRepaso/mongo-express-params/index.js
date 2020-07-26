//importamos los paquetes express y mongodb

const express = require('express');
const mongodb = require('mongodb');

//creamos un objeto MongoClient que nos permitirá conectarnos a un servidor mongodb

const MongoClient = mongodb.MongoClient;

//creamos una variable db en la que más tarde almacenaremos la base de datos a la que nos conectamos en el servidor
let db;

//nos conectamos al servidor mongodb. le pasamos la ruta con el formato 'mongodb://direcciónIp:nºdePuerto'.
//el método connect interá comunicarse con el servidor en la ruta especificada, si hay un error nos devolverá un
//objeto 'err'. si no hay errores, nos devuelve un objeto client. ese objeto cliente será una representación del servidor,
//con las bases de datos que tenemos en él
MongoClient.connect('mongodb://127.0.0.1:27017',function(err,client){
    if(err!==null){
        console.log(err);
        return err;
    }else{
        //si no hay errores, decimos que queremos trabajar con la base de datos 'libros' del servidor. la guardamos en la variable
        db = client.db('libros');
    }
});

//iniciamos el servidor
const app = express();

//iniciamos el jason para que pueda leer el servidor
app.use(express.json())

//indicamos al servidor que use archivos estáticos de la carpeta 'public'
app.use(express.static('public'));


//definimos una ruta GET /api/libros que nos devolverá todos los libros
app.get('/api/libros',function(req,res){

    //usamos el método find() para buscar los libros. usamos el método toArray() para formatear los datos.
    //esta operación puede fallar (por problemas de conexión). en ese caso, nos devolverá un objeto 'err'.
    //si no hay errores, nos devolverá la información solicitada (puede que llegue vacía si hemos hecho mal la consulta);
    db.collection('libros').find().toArray(function(err,libros){
        if(err!==null){
            console.log(err);
            res.send(err);
        }else{
            //si no hay errores, mandamos en la respuesta los libros solicitados. se envían en formato JSON
            res.send(libros);
        }
    })
});

//definimos una ruta GET /api/libros/:titulo que nos devuelve información sobre el libro solicitado
app.get('/api/libros/:titulo',function(req,res){
    //declaramos una variable titulo y guardamos el valor que nos llega en la url.
    let titulo = req.params.titulo;
    //buscamos en la colección libros el libro con el titulo seleccionado. como le tenemos que pasar un objeto, y tanto la propiedad que queremos
    //buscar como la variable donde tenemos almacenado el valor se llaman igual (titulo), no es necesario poner clave: valor (titulo:titulo)
    db.collection('libros').find({titulo}).toArray(function(err,libro){
        if(err!==null){
            console.log(err);
            res.send(err);
        }else{
            //si todo ha ido bien, mandamos en la respuesta un JSON con el libro solicitado
            res.send(libro)
        }
    })
});

//definimos una ruta POST /api/nuevoLibro/:titulo para agregar un nuevo libro a la base de datos
app.post('/api/nuevoLibro/:titulo',function(req,res){
    //creamos un objeto libro. el titulo será el que nos llega en la URL. además le añadimos la propiedad "estado" y le damos, por defecto,
    // el valor "sin leer"
    console.log(req.params.titulo);
    let libro = {
        titulo: req.params.titulo,
        estado: 'sin leer'
    }
    //añadimos el libro a la colección 'libros'
    db.collection('libros').insertOne(libro,function(err,result){
        if(err!==null){
            res.send(err);
        }else{
            //si no ha habido errores de conexión, nos devuelve el resultado de la operación.
            //si el resultado nos dice que ha insertado 1 elemento, podemos suponer que se ha añadido correctamente
            //en ese caso mandamos un mensaje que dice que se ha añadido el libro
            if(result.insertedCount === 1){
                res.send({mensaje: "Libro añadido correctamente"})
            }else{
                //si el resultado nos devuelve algo que no sea insertedCount:1, será porque no ha añadido.
                //entonces enviamos el mensaje correspondiente
                res.send({mensaje: "No se ha añadido el libro. Intenta de nuevo."})
            }
        }
    })
});

//definimos una ruta PUT /api/editarLibro/:titulo que usaremos para modificar el estado de un libro.
//esta ruta servirá únicamente para cambiar el estado de "sin leer" a "leído", pero no al revés
app.put('/api/editarLibro/:titulo',function(req,res){
    //guardamos en una variable titulo el título del libro que nos llega en la URL
    let titulo = req.params.titulo;
    //usamos el método updateOne para modificar un libro. a este método le pasamos 2 objetos: en el primero escribimos las condiciones
    //o filtro de búsqueda. en el segundo objeto, usando $set, indicamos qué propiedad(es) queremos modificar y qué valor tendrá(n)
    db.collection('libros').updateOne({titulo},{$set: {estado : "leído"}}, function(err,result){
        if(err!==null){
            console.log(err);
            res.send(err);
        }else{
            //al igual que con el método de añadir, nos devolverá un resultado. en función de lo que nos llegue en el objeto
            //result, mandaremos un mensaje u otro
            console.log(result);
            if(result.modifiedCount === 1){
                res.send({mensaje: "Libro editado correctamente."});
            }else{
                res.send({mensaje: "No se ha podido editar el libro. Intenta de nuevo."});
            }
        }
    })
});

//creamos una ruta DELETE /api/borrarLibro/:titulo para eliminar un libro concreto
app.delete('/api/borrarLibro/:titulo', function(req,res){
    //guardamos en la variable titulo el título del libro que nos llega en la URL
    let titulo = req.params.titulo;
    //usamos el método deleteOne para borrar un elemento. le pasamos un objeto en el que le diremos qué condiciones tiene que cumplir
    //el elemento que queremos eliminar
    db.collection('libros').deleteOne({titulo},function(err,result){
        if(err!==null){
            console.log(err);
            res.send(err);
        }else{
            if(result.deletedCount===1){
                res.send({mensaje: "Libro borrado correctamente"});
            }else{
                res.send({mensaje: "No se ha borrado el libro"});
            }
        }
    })
})


//IMPORTANTE añadir el puerto en el que va a escuchar el servidor
app.listen(3000);