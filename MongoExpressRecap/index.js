const express=require('express');
const mongodb=require('mongodb');


let MongoClient=mongodb.MongoClient;

let db;


MongoClient.connect('mongodb://127.0.0.1:27017',function(err,client){

if (err!==null) {
    console.log(err);
}else{
db=client.db('libros');
}
} );

const app=express();


app.get('/api/libros',function(err,libros){
db.collection('libros').find().toArray(function(err,libros){
if(err!==null){
console.log(err);
res.send(err);
}
else{

res.send(libros);

}




}
)
});

app.post('/api/nuevolibro/:titulo', function(req,res){
let tituloLibro=req.params.titulo;
let libro={
titulo:tituloLibro,
estado:"sin leer"
};
db.colection('libros').insertOne(libro,function(err,result){
if (err!==null) {
    console.log(err);
    res.send(err)
}else{
if(result.insertedCount===1){
res.send({mensaje:"libro añadido correctamente"})
}else{

res.send({mensaje:"No se ha podido añadir el libro"})

}


}



});




}
)

app.put('/api/editarLibro/:titulo',function(req,res){
let titulo= req.params.titulo

db.colection('libro').updateOne()
    if(err!==null){

console.log(err);


    }else{


        if(result.modifiedCount===1){
            res.send({mensaje:"libro añadido correctamente"})
            }else{
            
            res.send({mensaje:"No se ha podido añadir el libro"})
            
            }


    }








})



app.delete('/api/editarLibro/:titulo',function(req,res){

    if(err!==null){

console.log(err);


    }else{


        if(result.modifiedCount===1){
            res.send({mensaje:"libro añadido correctamente"})
            }else{
            
            res.send({mensaje:"No se ha podido añadir el libro"})
            
            }


    }








})





let port= process.env.PORT || 3000 
app.listen(port);

