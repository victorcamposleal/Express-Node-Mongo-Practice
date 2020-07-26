
//declaras la constante  express
const express=require('express');
//declaras la variable donde se guarda Mongo informacion
const mongodb=require('mongodb');
//declaras la constante app.use que es donde guradas la variable 
const app=express();
//declarmo la vaiable dende se va a conectar el servidor de mongo
let MongoClient=mongodb.MongoClient
//se declara la variable de datos que es donde se guarda la informacion que nos devolvera
let db;
// se declara la variables
let naves

// se inicia para que el servidor pueda leer json
app.use(express.json())

//añadimos el static
app.use(static.express())

MongoClient.connect('mongodb://127.0.0.1:27017',function(err,client){
if (err!==null) {
console.log(err);
    
}
else{
db=client.db('prueba');
naves=db.collection('naves')

}



})

//me muestra todos los datos de la base de datos

app.get('/',function(request,repsonse){
db.collection('naves').find().toArray(function(err,datos) {
    if (err!==null) {
        console.log(err);
        response.send({mensaje:"error"+err});
            
        }
        else{
            console.log(datos)
            repsonse.send(datos); 

        }

  
});


} )

//nos muestra solo lo que le pedimos


app.post('/',function(request,repsonse){
    //como llega en forma de ojeto declaramos lo que llega en froma de objeto
    let nave=request.body;
//metemos el ojeto que nos llega, no hace falta el array por que  no lo va a enviar
    db.collection('naves').insertOne(nave,function(err,result) {
        if (err!==null) {
            console.log(err);
            response.send({mensaje:"error"+err});
                
            }
            else{
                console.log(result)
                repsonse.send(result); 
    
            }
    
      
    });
    
    
    } )

app.post('/nuevaNave',function(request,repsonse){
        //como llega en forma de ojeto declaramos lo que llega en froma de objeto
        let nave=request.body;
    //metemos el ojeto que nos llega, no hace falta el array por que  no lo va a enviar en este insertone si no se conecta nos aparecera un error, es un error de comunicacion
        db.collection('naves').insertOne(nave,function(error,resultado) {
            if (err!==null) {
                console.log(err);
                response.send({mensaje:"error"+err});
                    
                }
                else{
                    console.log(result)
                    repsonse.send({mensaje:"item añadido correctamente"}); 
        
                }
        
          
        });
        
        
        } )

app.listen(3000);